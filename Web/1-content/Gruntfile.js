'use strict';

module.exports = function(grunt) {

    // 项目配置
    grunt.initConfig({
        // 加载元数据
        pkg: grunt.file.readJSON('package.json'),
        path: {
            js: "asset/js",
            css: "asset/css"
        },
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>*/\n',
        //sass编译的配置文件
        // sass: { // Task
        //     dist: { // Target
        //         options: { // Target options
        //             style: 'expanded'
        //         },
        //         files: { // Dictionary of files
        //             '<%= path.css %>/common/css/common.css': '<%= path.css %>/common/sass/common.scss', // 'destination': 'source'
        //             '<%= path.css %>/profoundgrid/css/profoundgrid.css': '<%= path.css %>/profoundgrid/sass/fixed_grid.scss',
        //             '<%= path.css %>/jeasyui_bootstrap/css/jeasyui_bootstrap.css': '<%= path.css %>/jeasyui_bootstrap/sass/jeasyui_bootstrap.scss'
        //         }
        //     }
        // },

        // 合并任务配置
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true,
            },
            css: {
                // 源文件，数组，
                src: [
                    '<%= path.css %>/common/common.css',
                    '<%= path.css %>/profoundgrid/fixed_grid.css',
                    '<%= path.css %>/jeasyui_bootstrap/jeasyui_bootstrap.css',
                    '<%= path.js %>/jquery-easyui/themes/bootstrap/easyui.css',
                    '<%= path.js %>/jquery-easyui/themes/icon.css',
                    '<%= path.js %>/jquery-loadmask/jquery.loadmask.css'
                ],
                // 目标文件, pkg.name 是定义在 package.json 文件中的 name
                dest: '<%= pkg.name %>.css'
            },
            js: {
                options: {
                    // js 文件合并用 ';'分隔
                    separator: ';',
                },
                src: [
                    '<%= path.js %>/knockout/knockout-3.1.0.js',
                    '<%= path.js %>/knockout/knockout.mapping-latest.js',
                    '<%= path.js %>/json/json2.js',
                    '<%= path.js %>/jquery/jquery-2.1.0.min.js',
                    '<%= path.js %>/jquery/jquery.formatDateTime.js',
                    '<%= path.js %>/jquery-loadmask/jquery.loadmask.js',
                    '<%= path.js %>/jquery-easyui/jquery.easyui.min.js',
                    '<%= path.js %>/jquery-easyui/locale/easyui-lang-zh_CN.js',
                    '<%= path.js %>/core/utils.js',
                    '<%= path.js %>/core/com.js',
                    '<%= path.js %>/core/easyui-uc_plugins.js',
                    '<%= path.js %>/core/easyuiLib.js',
                    '<%= path.js %>/core/datagrid-filter.js',
                    '<%= path.js %>/core/koLib.js',
                    '<%= path.js %>/core/viewModel.common.js',
                    '<%= path.js %>/core/viewModel.search.js',
                    '<%= path.js %>/core/viewModel.edit.js',
                    '<%= path.js %>/core/main.js',
                ],
                dest: '<%= pkg.name %>.js'
            },
        },
        // 压缩 css 文件
        cssmin: {
            css: {
                src: '<%= pkg.name %>.css',
                dest: '<%= pkg.name %>-min.css'
            }
        },
        // 压缩 js 文件
        uglify: {
            js: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            },
        },
        watch: {
            files: ['<%= path.js %>/core/*.js', '<%= path.css %>/**/*.scss'],
            tasks: ['default']
        }, //监控的配置文件
        compassMultiple: {
            options: {
                // if you need, you can set options. 
                environment: 'development',
                outputStyle: 'expanded',
                relativeAssets: true,
                time: true
            },


            // multiple option provides you to compile multi sassDir. 
            all: {
                options: {
                    multiple: [{
                        sassDir: '<%= path.css %>/common/sass',
                        cssDir: '<%= path.css %>/common/'
                    }, {
                        sassDir: '<%= path.css %>/profoundgrid/sass',
                        cssDir: '<%= path.css %>/profoundgrid/'
                    }, {
                        sassDir: '<%= path.css %>/jeasyui_bootstrap/sass',
                        cssDir: '<%= path.css %>/jeasyui_bootstrap/'
                    }]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-compass-multiple');
    // 指定默认任务.
    grunt.registerTask('default', ['compassMultiple', 'concat', 'cssmin', 'uglify']);
};
