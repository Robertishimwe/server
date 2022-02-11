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
















// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  view single article   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


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
      
      
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  view all articles   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


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



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Create  ARTICLE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    

    '/api/articles/create': {
      post: {
        security: [
          {
            ApiKey: []
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


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  delete article  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    '/api/articles/{did}': {
      delete: {
         security: [
            {
              ApiKey: []
            }
          ],
      
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




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  UPDATE POST  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    '/api/articles/{id}': {
      patch: {
       
        tags: ['BLOG'],
        security: [
          {
            ApiKey: []
          }
        ],
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

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  COMMENT ON A POST  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    '/api/articles/comments/{iKd}': {
      patch: {
       
        tags: ['BLOG'],
        security: [
          {
            ApiKey: []
          }
        ],
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
                comments: 'You made it bro!',
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


  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  LIKE A POST  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    '/api/articles/like/{id}': {
      patch: {
       
        tags: ['BLOG'],
        security: [
          {
            ApiKey: []
          }
        ],
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
        security: [
          {
            ApiKey: []
          }
        ],
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
        security: [
          {
            ApiKey: []
          }
        ],
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
                  FullName: 'ishimwe robert',
                  Email: 'andela@andela.com',
                  Messages: 'testing api '
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
        security: [
          {
            ApiKey: []
          }
        ],
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
        security: [
          {
            ApiKey: []
          }
        ],
        summary: 'TO FETCH ALL USERS',
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
                "userEmail":"kelly@andela.com",
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



    


        },
      }
    },

 




      
    










    components: {
      schemas: {
        

        Blog : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
             
            },
            title: {
              type: 'string',
            
            },
            body: {
              type: 'string',
              description: 'The body of the blog'
            },
            imgLink: {
              type: 'string',
           
            },
            
          }
        },

        Comment: {
          type: 'object',

          properties: {
            Comment: {
              type: 'string',
            
            }
          }
        },

        Contact : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
             
            },
            FullName: {
              type: 'string',
              
            },
            Email: {
              type: 'string',
           
            },
            Messages: {
              type: 'string',
             
            },
            
          }
        },

        User : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
            
            },
            UserName: {
              type: 'string',
              
            },
            Email: {
              type: 'string',
              
            },
            Password: {
              type: 'string',
             
            },
            
          }
        },
        
      },
      securitySchemes: {
        ApiKey: {
          type: 'apiKey',
          in: 'header',
          name: 'token' 
   
      }

    },

  },
}






