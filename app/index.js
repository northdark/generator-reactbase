var path = require('path');
var chalk = require('chalk');
var loadash = require('lodash');
var extend = require('deep-extend');
var generators = require('yeoman-generator');

var Packer = {
    initializing:function(){
        this.log( chalk.blue('脚手架build构建开始') );
        if( this._checkExist() ){
            this.log( chalk.red('当前目录已经存在文件结构') );
        }
    },
    prompting:function(){
        this._promptPackage();
    },
    default:function(){

        //创建package.json
        var pkg = this.fs.readJSON(this.templatePath('package.json'));
        pkg.name = this.pkg.name;
        pkg.version = this.pkg.version;
        this.fs.writeJSON( this.destinationPath('package.json'),pkg );
        //拷贝.gitignore
        this.copy( this.templatePath('.gitignore') , this.destinationPath('.gitignore') );
        //拷贝src目录: index.jsx & widgets目录
        this.mkdir( this.destinationPath('src/widgets') );
        //拷贝demo文件夹:
        this.fs.copyTpl( this.templatePath('index.tpl'),this.destinationPath('demo/index.html'),
            {title:this.pkg.name}
        );

    },
    /**
     * 校验当前目录是否已经初始化脚手架
     * @returns {boolean}
     * @private
     */
    _checkExist:function(){
        var path_pkg = this.destinationPath('package.json');
        var path_src = this.destinationPath('src');
        var path_demo= this.destinationPath('demo');
        if( this.fs.exists(path_pkg) && this.fs.exists(path_src) && this.fs.exists(path_demo) ){
            return true;
        }
        else{
            this.fs.delete( [path_pkg,path_src,path_demo] );
            return false;
        }
    },
    /**
     * 用户初始化pacakge.json
     * @private
     */
    _promptPackage:function(){
        var done = this.async();
        this.prompt([
            {
                type    : 'input',
                name    : 'name',
                message : ['组件名称（默认为',this.appname,'）:'].join(''),
                default : this.appname,
                store : true
            },{
                type    : 'input',
                name    : 'version',
                message : '版本号(默认为1.0.0)',
                default : '1.0.0',
                store : true
            }
        ], function (props) {
            this.pkg = props;
            done();
        }.bind(this));
    }
};

module.exports = generators.Base.extend(Packer);