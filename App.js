import React from "react";
import ReactDOM from "react-dom/client";


/* Plan your code 
* Header
    - Navbar 
        -logo 
        - anchor links (Home, About us , contact us , cart)
* Body 
    -searchbar and search button
    -Resaturant card container 
      - cards (6)
      -rating , cuisine ,image , restaurant name 
* Footer 
    - copyright 
    - Description about  the company .  
*/

//Header rendered - 
const Header = () =>
{
  return (
    <div className="header">
      <div className ="Logo">
      <img src="https://designcontest.nyc3.digitaloceanspaces.com/data/contests/301603/entries/c4913704c96cbb55.png" alt ="Logo"/>

      </div>
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
      </div>

    </div>
  )
}


//body rendered 
const Body = () =>
{
  return(
    <div className="body">
      <div className="searchBar">Search Bar</div>
      <div className="restaurantContainer">
      {/*to include the cards of restaurant we are  including restaurant card component  */}
        <RestaurantCard resData = {resList[0]}/>
        <RestaurantCard resData = {resList[1]}/>
        <RestaurantCard resData = {resList[2]}/>
        <RestaurantCard resData = {resList[3]}/>

        <RestaurantCard resData = {resList[4]}/>
        <RestaurantCard resData = {resList[5]}/>
        <RestaurantCard resData = {resList[6]}/>
        <RestaurantCard resData = {resList[7]}/>
        <RestaurantCard resData = {resList[8]}/>
        <RestaurantCard resData = {resList[9]}/>
        <RestaurantCard resData = {resList[10]}/>
        <RestaurantCard resData = {resList[11]}/>
        <RestaurantCard resData = {resList[12]}/>
        <RestaurantCard resData = {resList[13]}/>
        <RestaurantCard resData = {resList[14]}/>
        <RestaurantCard resData = {resList[15]}/>
        <RestaurantCard resData = {resList[16]}/>
        <RestaurantCard resData = {resList[17]}/>
        <RestaurantCard resData = {resList[18]}/>
        <RestaurantCard resData = {resList[19]}/>
        <RestaurantCard resData = {resList[17]}/>
       
    
    

       
        
      </div>
    </div>
  )
}



/* at the end of the day we can write css as json object */
stylecard = {
  backgroundColor :"yellow",
  border:"1px solid black"
}

const resList =  [
  {
    "info": {
      "id": "65127",
      "name": "Oven Story Pizza",
      "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
      "locality": "AMAR DARSHAN BUILDING, SAKET SQUARE, KHAJRANA MAIN ROAD",
      "areaName": "Baikunth Dham",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "65127",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4500
      },
      "parentId": "3534",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "27-42 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/oven-story-pizza-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-indore-65127",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "303103",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "RNT Marg",
      "areaName": "South Tukoganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "303103",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "547",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 00:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-rnt-marg-south-tukoganj-indore-303103",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "235825",
      "name": "Biryani By Kilo",
      "cloudinaryImageId": "qi6wf6klvbgtvcaylaj0",
      "locality": "Vijay Nagar",
      "areaName": "Vijay Nagar",
      "costForTwo": "₹499 for two",
      "cuisines": [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "235825",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6400
      },
      "parentId": "130",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 7.6,
        "serviceability": "SERVICEABLE",
        "slaString": "57 mins",
        "lastMileTravelString": "7.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/biryani-by-kilo-vijay-nagar-indore-235825",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "362169",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "44th Scheme",
      "areaName": "Khatiwala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "362169",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2400
      },
      "parentId": "5588",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-44th-scheme-khatiwala-indore-362169",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "73369",
      "name": "Maa Ki Rasoi",
      "cloudinaryImageId": "b1h0agx8ysx7w6ybrygc",
      "locality": "Gopur Square",
      "areaName": "Sudama Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "South Indian",
        "Chinese"
      ],
      "avgRating": 4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "73369",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "401429",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/maa-ki-rasoi-gopur-square-sudama-nagar-indore-73369",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "79829",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "mjvpnvts8c2v4hatzzus",
      "locality": "Opp Central Mall",
      "areaName": "Rnt Marg",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "79829",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "2093",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-opp-central-mall-rnt-marg-indore-79829",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "86719",
      "name": "Cafe Coffee Day",
      "cloudinaryImageId": "kpngr4tksfjwttht6jrc",
      "locality": "TREASURE ISLAND 2 MALL INDORE MP",
      "areaName": "South Tukoganj",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "86719",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "1",
      "avgRatingString": "3.7",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 21:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-treasure-island-2-mall-mp-south-tukoganj-indore-86719",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "84070",
      "name": "Gurukripa Restaurant  Sarwate",
      "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
      "locality": "Sarwate",
      "areaName": "South Tukoganj",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Indian",
        "Fast Food",
        "Chinese",
        "Beverages",
        "Desserts",
        "Jain",
        "Punjabi"
      ],
      "avgRating": 4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "84070",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2400
      },
      "parentId": "92204",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-indore-84070",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "322540",
      "name": "UBQ BY Barbeque Nation",
      "cloudinaryImageId": "ousldxwz6z3cypd2pygf",
      "locality": "Treasure Island Mall",
      "areaName": "Tukoganj",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "322540",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3600
      },
      "parentId": "10804",
      "avgRatingString": "3.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-treasure-island-mall-tukoganj-indore-322540",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "64814",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "yvsx0eg2orug7sfpdazr",
      "locality": "Anand Bazar",
      "areaName": "Old Palasia",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "64814",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4500
      },
      "parentId": "2233",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "39 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-anand-bazar-old-palasia-indore-64814",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "156145",
      "name": "The Good Bowl",
      "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
      "locality": "Annapoorna FC",
      "areaName": "Sudama Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "156145",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "7918",
      "avgRatingString": "4.0",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-good-bowl-annapoorna-fc-sudama-nagar-indore-156145",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "67970",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Snehnagar",
      "areaName": "Sapna Sangeeta",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "67970",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2400
      },
      "parentId": "2",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 00:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-snehnagar-sapna-sangeeta-indore-67970",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65543",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Saket Square",
      "areaName": "Old Palasia",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "65543",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4500
      },
      "parentId": "721",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-saket-square-old-palasia-indore-65543",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "64823",
      "name": "Nafees Restaurant",
      "cloudinaryImageId": "x7zvrb5mbg92skzncwnu",
      "locality": "Greater Kailash Road",
      "areaName": "Old Palasia",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Mughlai",
        "Biryani",
        "North Indian",
        "Chinese",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "64823",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4500
      },
      "parentId": "10713",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "37 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nafees-restaurant-greater-kailash-road-old-palasia-indore-64823",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "80650",
      "name": "Faasos - Wraps & Rolls",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Raghav Regency",
      "areaName": "Sudama Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "80650",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "21809",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-raghav-regency-sudama-nagar-indore-80650",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "86044",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "qa9nfrq8aomor6glzcpo",
      "locality": "Raghav Regency",
      "areaName": "Sudama Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "86044",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "4925",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-raghav-regency-sudama-nagar-indore-86044",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "361411",
      "name": "Asia Seven - Sizzling Chinese",
      "cloudinaryImageId": "b4ca94ca747927e9a728689dae0c8b30",
      "locality": "South Tukoganj",
      "areaName": "South Tukoganj",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Pan-Asian",
        "Thai"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "361411",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "3521",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 22:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/asia-seven-sizzling-chinese-south-tukoganj-indore-361411",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "322539",
      "name": "Barbeque Nation",
      "cloudinaryImageId": "yllayyaltqyeear9nh2e",
      "locality": "Treasure Island Mall",
      "areaName": "Tukoganj",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.5,
      "feeDetails": {
        "restaurantId": "322539",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3600
      },
      "parentId": "2438",
      "avgRatingString": "3.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-13 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/barbeque-nation-treasure-island-mall-tukoganj-indore-322539",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "80653",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
      "locality": "Raghav Regency",
      "areaName": "Sudama Nagar",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Snacks",
        "Bakery",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "80653",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "4444",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-raghav-regency-sudama-nagar-indore-80653",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "80652",
      "name": "Firangi Bake",
      "cloudinaryImageId": "v9qsbs5qxvtq8jln33sw",
      "locality": "Raghav Regency",
      "areaName": "Sudama Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Mexican",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "80652",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "3952",
      "avgRatingString": "4.0",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.1,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "4.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-14 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/firangi-bake-raghav-regency-sudama-nagar-indore-80652",
      "type": "WEBLINK"
    }
  }
]
const RestaurantCard = (resData) =>
{ 
  
  {/* Props stands for properties 
  Basically when we are sending the props into a componenet at the end of the day we are passing it like 
  the arguments to a function in javascript 
 */}
  console.log(resData);
  return (
    <div className="res-card">
      
      <div className="resCard-img">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.resData.info.cloudinaryImageId} alt="res-card-img" />
      <h3>{resData.resData.info.name}</h3>
      <h5>{resData.resData.info.avgRating} stars</h5>
      <h5>{resData.resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.resData.info.costForTwo}</h5>
      <h5>{resData.resData.info.areaName}</h5>
      
      

      </div>
      <div>

      </div>
    </div>
  )
}


//This component is a top level component 
const AppLayout = () =>{
  return (
    <div>
     <Header/>
      <Body/>

    </div>
 

  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);