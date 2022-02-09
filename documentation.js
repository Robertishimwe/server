// module.exports = {
//   swagger: "2.0"  ,
//   info: {
//     version: '1.0.0',
//     title: 'MY BRAND API',
//     description: 'My brand api is background engine for my portfolio website. it runs on NodeJs using MongoDB as database with Mongoose as the ORM. I am using JWT for handling authentications and JOI for Validating inputs from the user before they are sent to the server and Bcrypt for hashing passwords stored in the database.',
   
//   },

//   servers: [
//     {
//       url: 'http://127.0.0.1:3000/',
//       description: 'Local server',
    
//     },
//    {
//     url: 'https://my-brand-api-v2.herokuapp.com/',
//     description: 'Remote sever'
//    }
//   ],
  
  
//   paths: {
//     '/api/articles': {
//       get: {
//         tags: ['BLOG'],
//           summary: 'To fetch All posts',
//            responses: {
//                     '200': {
//                        description: 'The list of the blogs',
//                         content: {
//                           'application/json': {
//                              schema: {
//                                $ref: '#/components/schemas/Blog'
//                             },
//                           },
                          
//                         },
//                       },
//                     },
//                   },

//               },
//          },

//          '/api/articles': {
//           get: {
//             tags: ['BLOGG'],
//               summary: 'To fetch All posts',
//                responses: {
//                         '200': {
//                            description: 'The list of the blogs',
//                             content: {
//                               'application/json': {
//                                  schema: {
//                                    $ref: '#/components/schemas/Blog'
//                                 },
//                               },
                              
//                             },
//                           },
//                         },
//                       },
    
//                   },
//              }















// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Don't touch   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<




// module.exports = {
//   openapi: '3.0.1',
//   info: {
//     version: '1.0.0',
//     title: 'MY BRAND API',
//     description: 'My brand api is background engine for my portfolio website. it runs on NodeJs using MongoDB as database with Mongoose as the ORM. I am using JWT for handling authentications and JOI for Validating inputs from the user before they are sent to the server and Bcrypt for hashing passwords stored in the database.',
   
//   },

//   servers: [
//     {
//       url: 'http://127.0.0.1:3000/',
//       description: 'Local server',
    
//     },
//    {
//     url: 'https://my-brand-api-v2.herokuapp.com/',
//     description: 'Remote sever'
//    }
//   ],
  
  
//   paths: {
//     '/api/articles': {
//       get: {
//         tags: ['BLOG'],
//         summary: 'To fetch All posts',
//         // operationId: 'getUsers',
       
//         responses: {
//           '200': {
//             description: 'The list of the blogs',
//             content: {
//               'application/json': {
//                 schema: {
//                   $ref: '#/components/schemas/Blog'
//                 },
                




                
               
//               }
//             }
//           },
          
//         }
//       },

//     },

//     '/api/articles/{id}': {
//       get: {
//         tags: ['BLOG'],
//         summary: 'To fetch a single post by Id',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The blog id",
//           schema: {
//             type: "string",
//           },
          
//       }],
//         responses: {
//           '200': {
//             description: 'The blog description by id',
//             content: {
//               'application/json': {
//                 schema: {
//                   $ref: '#/components/schemas/Blog'
//                 },
//                 example: {
//                   id: '011111',
//                   title: 'Andela kigali',
//                   body: 'Andela kigaliAndela kigaliAndela kigaliAndela kigaliAndela kigaliAndela kigali',
//                   imgLink: 'htitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
//                 },
//               },
//             }
//           },
//           '404': {
//             description: 'The blog wasn\'t found'
//           }
//         }
//       },
//     },

//     '/api/articles/create': {
//       post: {
//         security: [
//           {
//             User: []
//           }
//         ],
       
//         tags: ['BLOG'],
//         summary: 'To post article',
//         parameters: [],
//         requestBody: {
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/User'
//               },
//               example: {
//                 "title": "top 10 ricTYDJYTSTRDTYYes",
//                 "articleBody": "req.body.articleBody",
//                 "ImageLink": "http://djhkjd.com"
//         },
//             }
//           },
//           required: true
//         },
//         responses: {
//           '200': {
//             description: 'New Post was created successfully'
//           },
//           '400': {
//             description: 'Bad Request',
        
//           }
//         }
//       }

//     },

//     '/api/articles/{id}': {
//       delete: {
      
//         tags: ['BLOG'],
//         summary: 'To delete a single article',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The blog id",
//           schema: {
//             type: "string",
//           },
          
//       }],
//         responses: {
//           '204': {
//             description: 'The blog post deleted successfully',
     
//           },
//           '404': {
//             description: 'The blog wasn\'t found'
//           }
//         }
//       },
//     },

//     '/api/articles/{id}': {
//       patch: {
       
//         tags: ['BLOG'],
//         description: 'Create users',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The blog id",
//           schema: {
//             type: "string",
//           },
          
//       }],
//         requestBody: {
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/Blog'
//               },
             
//             }
//           },
//           required: true
//         },
//         responses: {
//           '200': {
//             description: 'Post Was Updated Successfully'
//           },
//           '400': {
//             description: 'Bad Request',
     
//           }
//         }
//       }

//     },

//     '/api/comment/{id}': {
//       putch: {
       
//         tags: ['BLOG'],
//         description: 'Comment on a blog',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The blog id",
//           schema: {
//             type: "string",
//           },
          
//       }],
//         requestBody: {
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/Comment'
//               },
//               example: {
//                 Comment: 'Nice Work!',
//               },
//             }
//           },
//           required: true
//         },
//         responses: {
//           '200': {
//             description: 'Comment Was Updated Successfully'
//           },
//           '400': {
//             description: 'Bad Request',
         
//           }
//         }
//       }

//     },

//     '/api/articles/like/{id}': {
//       get: {
       
//         tags: ['BLOG'],
//         description: 'Like a article',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The blog id",
//           schema: {
//             type: "string",
//           },
          
//       }],
       


      
//         responses: {
//           '200': {
//             description: 'Liked a Post Successfully',
//           },
//           '400': {
//             description: 'Bad Request',
           
//           }
//         }
//       }

//     },

//     '/api/contact': {
//       post: {
       
//         tags: ['CONTACT'],
//         summary: 'send  MESSAGES',
//         responses: {
//           '200': {
//             description: 'The list of the queries',
//             content: {
//               'application/json': {
//                 schema: {
//                   $ref: '#/components/schemas/Contact'
//                 },
             
//               }
//             }
//           },
          
//         }
//       },

//     },


//     '/api/contact': {
//       get: {
       
//         tags: ['CONTACT'],
//         summary: 'RECIEVED MESSAGES',
//         responses: {
//           '200': {
//             description: 'The list of the queries',
//             content: {
//               'application/json': {
//                 schema: {
//                   $ref: '#/components/schemas/Contact'
//                 },
             
//               }
//             }
//           },
          
//         }
//       },

//     },

//     '/api/contact/{id}': {
//       get: {
        
//         tags: ['CONTACT'],
//         summary: 'VIEW A SINGLE MESSAGE',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The query id",
//           schema: {
//             type: "string",
//           },
          
//       }],
//         responses: {
//           '200': {
//             description: 'The blog description by id',
//             content: {
//               'application/json': {
//                 schema: {
//                   $ref: '#/components/schemas/Contact'
//                 },
//                 example: {
//                   id: 'd5fE_asz',
//                   FullName: 'Alexander The Great',
//                   Email: 'guest@alexander.com',
//                   Messages: 'Hello I want to hire you in my company send your resume and cover letter'
//                 },
//               },
//             }
//           },
//           '404': {
//             description: 'The query wasn\'t found'
//           }
//         }
//       },
//     },

//     '/api/contact/{id}': {
//       delete: {
       
//         tags: ['CONTACT'],
//         summary: 'VIEW A SINGLE MESSAGE BY ID',
//         parameters: [{
//           name: "id",
//           in: "path",
//           required : true,
//           description : "The query id",
//           schema: {
//             type: "string",
//           },
          
//       }],
//         responses: {
//           '200': {
//             description: 'The query post deleted successfully',

//           },
//           '404': {
//             description: 'The query wasn\'t found'
//           }
//         }
//       },
//     },

//     '/api/user/register': {
//       post: {
//         tags: ['USER'],
//         description: 'Create Account',
//         requestBody: {
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/User'
//               },
//               example: {
//                 UserName: 'Alexander The Great',
//                 Email: 'guest@alexander.com',
//                 Password: 'password'
//               },
//             }
//           },
//           required: true
//         },
//         responses: {
//           '200': {
//             description: 'New User was created successfully'
//           },
//           '400': {
//             description: 'Bad Request',
           
//           }
//         }
//       }

//     },

   
//     '/api/user/login': {
//       post: {
//         tags: ['USER'],
//         description: 'Log In',
//         requestBody: {
//           content: {
//             'application/json': {
//               schema: {
//                 $ref: '#/components/schemas/User'
//               },
//               example:{
//                 "userEmail":"andela@andela.com",
//                 "userPassword":"Andela"
           
//            }
//             }
//           },
//           required: true
//         },
//         responses: {
//           '200': {
//             description: 'User Logged In successfully'
//           },
//           '400': {
//             description: 'Bad Request',
//             // content: {
//             //   'application/json': {
//             //     schema: {
//             //       $ref: '#/components/schemas/Error'
//             //     },
//             //     example: {
//             //       message: 'User identificationNumbers 10, 20 already exist',
//             //       internal_code: 'invalid_parameters'
//             //     }
//             //   }
//             // }
          
//       }

//     },


//     components: {
//       schemas: {

        

//         User: {
//           type: 'apiKey',
//           in: 'header',
//           name: 'auth-token' },







//       }
//     }

   
//       }

//     },

//   },
// }








// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Don't touch   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'MY BRAND API',
    description: 'My brand api is background engine for my portfolio website. it runs on NodeJs using MongoDB as database with Mongoose as the ORM. I am using JWT for handling authentications and JOI for Validating inputs from the user before they are sent to the server and Bcrypt for hashing passwords stored in the database.',
   
  },

  servers: [
    {
      url: 'http://127.0.0.1:3000/',
      description: 'Local server',
    
    },
   {
    url: 'https://my-brand-api-v2.herokuapp.com/',
    description: 'Remote sever'
   }
  ],
  
  
  paths: {

    '/api/contact/send': {
      post:{
        tags:['CONTACT'],
          summary: 'SEND A MESSAGE', 
          parameters: [],
          requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/User'
              },
              example: {
                
                  name:"ishi",
                  email:"eoeoe@GOOGLE.net",
                  message:"heLO WELCOME TO THIS"       
        }
      }
    }
  },
        responses:{
          '200': {
            description: 'The list of the blogs',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Blog'
                },
                
              }
              }
            }
          },

      
      
      
      
      
      
      }},

















// view single article

    '/api/articles/{d}': {
      get:{
        tags:['BLOG'], 
        summary: 'To fetch single post',
        

        responses:{
          '200': {
            description: 'The list of the blogs',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Blog'
                },
                
              }
              }
            }
          },






      
      parameters: [{
        name: "d",
        in: "path",
        required : true,
        description : "The blog id",
    },
      ]},},
      
      

// view all articles

    '/api/articles': {
      get: {
        tags: ['BLOG'],
        summary: 'To fetch All posts',
        // operationId: 'getUsers',
       
        responses: {
          '200': {
            description: 'The list of the blogs',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Blog'
                },
                




                
               
              }
            }
          },
          
        }
      },

    },


    //Create  ARTICLE

    

    '/api/articles/create': {
      post: {
        security: [
          {
            User: []
          }
        ],
       
        tags: ['BLOG'],
        summary: 'To post article',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/User'
              },
              example: {
                "title": "top 10 ricTYDJYTSTRDTYYes",
                "articleBody": "req.body.articleBody",
                "ImageLink": "http://djhkjd.com"
        },
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New Post was created successfully'
          },
          '400': {
            description: 'Bad Request',
        
          }
        }
      }

    },




// delete article

    '/api/articles/{did}': {
      delete: {
      
        tags: ['BLOG'],
        summary: 'To delete a single article',
        parameters: [{
          name: "did",
          in: "path",
          required : true,
          description : "The blog id",
          schema: {
            type: "string",
          },
          
      }],
        responses: {
          '204': {
            description: 'The blog post deleted successfully',
     
          },
          '404': {
            description: 'The blog wasn\'t found'
          }
        }
      },
    },



// UPDATE POST


    '/api/articles/{id}': {
      patch: {
       
        tags: ['BLOG'],
        summary: 'UPDATE POST',
        description: 'UPDATE POST',
        parameters: [{
          name: "id",
          in: "path",
          required : true,
          description : "The blog id",
          schema: {
            type: "string",
          },
          
      }],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/Blog'
              },
             
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'Post Was Updated Successfully'
          },
          '400': {
            description: 'Bad Request',
     
          }
        }
      }

    },

    // COMMENT ON A POST

    '/api/articles/comments/{iKd}': {
      patch: {
       
        tags: ['BLOG'],
        summary: 'COMMENT ON POST',
        description: 'Comment on a blog',
        parameters: [{
          name: "iKd",
          in: "path",
          required : true,
          description : "The blog id",
          schema: {
            type: "string",
          },
          
      }],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/Comment'
              },
              example: {
                Comment: 'Nice Work!',
              },
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'Comment Was Updated Successfully'
          },
          '400': {
            description: 'Bad Request',
         
          }
        }
      }

    },


    // LIKE A POST

    '/api/articles/like/{id}': {
      patch: {
       
        tags: ['BLOG'],
        description: 'Like a article',
        summary: 'LIKE A POST',
        parameters: [{
          name: "id",
          in: "path",
          required : true,
          description : "The blog id",
          schema: {
            type: "string",
          },
          
      }],
       


      
        responses: {
          '200': {
            description: 'Liked a Post Successfully',
          },
          '400': {
            description: 'Bad Request',
           
          }
        }
      }

    },


 // SEND A MESSAGE


    '/api/contact': {
      post: {
       
        tags: ['CONTACT'],
        summary: 'send  MESSAGES',
        responses: {
          '200': {
            description: 'The list of the queries',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Contact'
                },
             
              }
            }
          },
          
        }
      },

    },
        

    '/api/contact': {
      get: {
       
        tags: ['CONTACT'],
        summary: 'RECIEVED MESSAGES',
        responses: {
          '200': {
            description: 'The list of MESSAGES',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Contact'
                },
             
              }
            }
          },
          
        }
      },

    },

    '/api/contact/{id}': {
      get: {
        
        tags: ['CONTACT'],
        summary: 'VIEW A SINGLE MESSAGE',
        parameters: [{
          name: "id",
          in: "path",
          required : true,
          description : "The query id",
          schema: {
            type: "string",
          },
          
      }],
        responses: {
          '200': {
            description: 'The blog description by id',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Contact'
                },
                example: {
                  id: 'd5fE_asz',
                  FullName: 'Alexander The Great',
                  Email: 'guest@alexander.com',
                  Messages: 'Hello I want to hire you in my company send your resume and cover letter'
                },
              },
            }
          },
          '404': {
            description: 'The query wasn\'t found'
          }
        }
      },
    },

    '/api/contact/{id}': {
      delete: {
       
        tags: ['CONTACT'],
        summary: 'DELETE A MESSAGE BY ID',
        parameters: [{
          name: "id",
          in: "path",
          required : true,
          description : "The query id",
          schema: {
            type: "string",
          },
          
      }],
        responses: {
          '200': {
            description: 'The query post deleted successfully',

          },
          '404': {
            description: 'The query wasn\'t found'
          }
        }
      },
    },




    // register

    '/api/user/register': {
      post: {
        tags: ['USER'],
        description: 'Create Account',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/User'
              },
              example: {
                UserName: 'Alexander The Great',
                Email: 'guest@alexander.com',
                Password: 'password'
              },
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New User was created successfully'
          },
          '400': {
            description: 'Bad Request',
           
          }
        }
      }

    },
    
    
    // view all users
    
    '/api/user': {
      get: {
        tags: ['USER'],
        summary: 'TO FETCH ALL USERS',
        // operationId: 'getUsers',
       
        responses: {
          '200': {
            description: 'LIST of ALL USERS',
            content: {
              'application/json': {
                schema: {
                  $ref: '##/components/schemas/Blog'
                },
                




                
               
              }
            }
          },
          
        }
      },

    },






    // login
   
    '/api/user/login': {
      post: {
        tags: ['USER'],
        description: 'Log In',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '##/components/schemas/User'
              },
              example:{
                "userEmail":"andela@andela.com",
                "userPassword":"Andela"
           
           }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'User Logged In successfully'
          },
          '400': {
            description: 'Bad Request',
          
      }

    },



    //SINGLE POST FETCH TRY

    ////////////////////////////////////////////////////


    components: {
      schemas: {
        

        Blog : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
              description: 'The auto-generated id of the blog'
            },
            title: {
              type: 'string',
              description: 'The blog title'
            },
            body: {
              type: 'string',
              description: 'The body of the blog'
            },
            imgLink: {
              type: 'string',
              description: 'The Link of the Image Link'
            },
            
          }
        },

        Comment: {
          type: 'object',

          properties: {
            Comment: {
              type: 'string',
              description: 'Type your comment here',
            }
          }
        },

        Contact : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
              description: 'The auto-generated id of the blog'
            },
            FullName: {
              type: 'string',
              description: 'Fullname of the sender'
            },
            Email: {
              type: 'string',
              description: 'Sender\'s email address'
            },
            Messages: {
              type: 'string',
              description: 'The message of the sender'
            },
            
          }
        },

        User : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
              description: 'The auto-generated id of the User'
            },
            UserName: {
              type: 'string',
              description: 'Username of the User'
            },
            Email: {
              type: 'string',
              description: 'User\'s email address'
            },
            Password: {
              type: 'string',
              description: 'The password of the user'
            },
            
          }
        },
        
      },
      securitySchemes: {
        ApiKey: {
          type: 'apiKey',
          in: 'header',
          name: 'auth-token' 
        },
      }
    }

 




      
    















///////////////////////////////////////////////////////////////////////////


   
      }

    },

  },
}






