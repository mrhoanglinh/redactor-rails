// window.init_redactor = function(){
//   var csrf_token = $('meta[name=csrf-token]').attr('content');
//   var csrf_param = $('meta[name=csrf-param]').attr('content');
//   var params = {};
//   if (csrf_param !== undefined && csrf_token !== undefined) {
//       params[csrf_param] = csrf_token;
//   }
//   $('.redactor').redactor({
//         // You can specify, which ones plugins you need.
//         // If you want to use plugins, you have add plugins to your
//         // application.js and application.css files and uncomment the line below:
//         // "plugins": ['fontsize', 'fontcolor', 'fontfamily', 'fullscreen', 'textdirection', 'clips'],
//         "imageUpload":"/redactor_rails/pictures",
//         "uploadImageFields": params,
//         "imageGetJson":"/redactor_rails/pictures",
//         "fileUpload":"/redactor_rails/attachment_files",
//         "uploadFileFields": params,
//         "fileGetJson":"/redactor_rails/attachment_files",
//         "path":"/assets/redactor-rails",
//         "css":"style.css"
//       });
// }

// $(document).on( 'ready page:load', window.init_redactor );
