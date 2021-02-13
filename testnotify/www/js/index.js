/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
  
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
  
        this.receivedEvent('deviceready');
        var inAppBrowserbRef = cordova.InAppBrowser.open('https://ebekala.com/ar/%d8%a7%d9%84%d8%b1%d8%a6%d9%8a%d8%b3%d9%8a%d8%a9/', '_self', 'location=no,toolbar=no,zoom=no,clearcache=yes,hidespinner=no,beforeload=yes');
  
        /*
        inAppBrowserbRef.addEventListener('loadstart', function() {
          alert("yes");
        });
        */
        
                //admob
             // Set AdMobAds options:
              admob.setOptions({
                publisherId:           "ca-app-pub-7251676025279948/2412504172",  // Required
                interstitialAdId:      "ca-app-pub-7251676025279948/4847095820",  // Optional
                autoShowBanner:        true,                                      // Optional
                autoShowRInterstitial: false,                                     // Optional
                autoShowRewarded:      false,                                     // Optional
                tappxIdiOS:            "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
                tappxIdAndroid:        "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
                tappxShare:            0.5                                        // Optional
              });
              
              // Start showing banners (atomatic when autoShowBanner is set to true)
              admob.createBannerView();
              
              // Request interstitial ad (will present automatically when autoShowInterstitial is set to true)
              admob.requestInterstitialAd();
         
              // Request rewarded ad (will present automatically when autoShowRewarded is set to true)
              admob.requestRewardedAd();
               //admob
        
        
  //notify
  
        // Add to index.js or the first page that loads with your app.
  // Add to index.js or the first page that loads with your app.
  // For Intel XDK and please add this to your app.js.
  
  // Add to index.js or the first page that loads with your app.
  // For Intel XDK and please add this to your app.js.
  
  document.addEventListener('deviceready', function () {
    //Remove this method to stop OneSignal Debugging 
    window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
    
    window.plugins.OneSignal
      .startInit("c66e711d-9f4f-456d-a808-4a4e5abf809f")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();
    
    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });
    
  }, false);
    },
  
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
  
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
  
        console.log('Received Event: ' + id);
    }
  };
  
  app.initialize();