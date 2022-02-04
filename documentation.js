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
                  $ref: '#/components/schemas/Blog'
                },
                




                
               
              }
            }
          },
          
        }
      },

    },

    '/api/articles/{id}': {
      get: {
        tags: ['BLOG'],
        summary: 'To fetch a single post by Id',
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
            description: 'The blog description by id',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Blog'
                },
                example: {
                  id: '011111',
                  title: 'Andela kigali',
                  body: 'Andela kigaliAndela kigaliAndela kigaliAndela kigaliAndela kigaliAndela kigali',
                  imgLink: 'htitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
                },
              },
            }
          },
          '404': {
            description: 'The blog wasn\'t found'
          }
        }
      },
    },

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
                $ref: '#/components/schemas/User'
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

    '/api/articles/{id}': {
      delete: {
      
        tags: ['BLOG'],
        summary: 'To delete a single article',
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
          '204': {
            description: 'The blog post deleted successfully',
     
          },
          '404': {
            description: 'The blog wasn\'t found'
          }
        }
      },
    },

    '/api/articles/{id}': {
      patch: {
       
        tags: ['BLOG'],
        description: 'Create users',
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
                $ref: '#/components/schemas/Blog'
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

    '/api/comment/{id}': {
      putch: {
       
        tags: ['BLOG'],
        description: 'Comment on a blog',
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
                $ref: '#/components/schemas/Comment'
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

    '/api/articles/like/{id}': {
      get: {
       
        tags: ['BLOG'],
        description: 'Like a article',
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
                  $ref: '#/components/schemas/Contact'
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
            description: 'The list of the queries',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Contact'
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
                  $ref: '#/components/schemas/Contact'
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
        summary: 'VIEW A SINGLE MESSAGE BY ID',
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

    '/api/user/register': {
      post: {
        tags: ['USER'],
        description: 'Create Account',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
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

   
    '/api/user/login': {
      post: {
        tags: ['USER'],
        description: 'Log In',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
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
            // content: {
            //   'application/json': {
            //     schema: {
            //       $ref: '#/components/schemas/Error'
            //     },
            //     example: {
            //       message: 'User identificationNumbers 10, 20 already exist',
            //       internal_code: 'invalid_parameters'
            //     }
            //   }
            // }
          
      }

    },


    components: {
      schemas: {

        

        User: {
          type: 'apiKey',
          in: 'header',
          name: 'auth-token' },







      }
    }

   
      }

    },

  },
}