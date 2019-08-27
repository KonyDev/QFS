#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIApplication_symbols(JSContext*);
@protocol UIApplicationUIUserNotificationSettingsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) UIUserNotificationSettings * currentUserNotificationSettings;
-(void) registerUserNotificationSettings: (UIUserNotificationSettings *) notificationSettings ;
@end
@protocol UIApplicationUIUserNotificationSettingsCategoryClassExports<JSExport>
@end
@protocol UIApplicationUINewsstandCategoryInstanceExports<JSExport>
-(void) setNewsstandIconImage: (UIImage *) image ;
@end
@protocol UIApplicationUINewsstandCategoryClassExports<JSExport>
@end
@protocol UIApplicationUIRemoteControlEventsCategoryInstanceExports<JSExport>
-(void) endReceivingRemoteControlEvents;
-(void) beginReceivingRemoteControlEvents;
@end
@protocol UIApplicationUIRemoteControlEventsCategoryClassExports<JSExport>
@end
@protocol UIApplicationUILocalNotificationsCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * scheduledLocalNotifications;
-(void) cancelAllLocalNotifications;
-(void) cancelLocalNotification: (UILocalNotification *) notification ;
-(void) presentLocalNotificationNow: (UILocalNotification *) notification ;
-(void) scheduleLocalNotification: (UILocalNotification *) notification ;
@end
@protocol UIApplicationUILocalNotificationsCategoryClassExports<JSExport>
@end
@protocol UIApplicationInstanceExports<JSExport>
@property (getter=isProtectedDataAvailable,readonly,nonatomic) BOOL protectedDataAvailable;
@property (readonly,nonatomic) UIContentSizeCategory preferredContentSizeCategory;
@property (readonly,nonatomic) CGRect statusBarFrame;
@property (nonatomic) NSInteger applicationIconBadgeNumber;
@property (readonly,nonatomic) NSArray * windows;
@property (readonly,nonatomic) NSTimeInterval statusBarOrientationAnimationDuration;
@property (readonly,nonatomic) UIUserInterfaceLayoutDirection userInterfaceLayoutDirection;
@property (getter=isIdleTimerDisabled,nonatomic) BOOL idleTimerDisabled;
@property (readonly,nonatomic) UIApplicationState applicationState;
@property (readonly,nonatomic) UIStatusBarStyle statusBarStyle;
@property (getter=isIgnoringInteractionEvents,readonly,nonatomic) BOOL ignoringInteractionEvents;
@property (readonly,nonatomic) UIBackgroundRefreshStatus backgroundRefreshStatus;
@property (assign,nonatomic) id delegate;
@property (readonly,nonatomic) NSTimeInterval backgroundTimeRemaining;
@property (readonly,nonatomic) UIInterfaceOrientation statusBarOrientation;
@property (getter=isNetworkActivityIndicatorVisible,nonatomic) BOOL networkActivityIndicatorVisible;
@property (readonly,nonatomic) UIWindow * keyWindow;
@property (nonatomic) BOOL applicationSupportsShakeToEdit;
@property (getter=isStatusBarHidden,readonly,nonatomic) BOOL statusBarHidden;
-(void) setMinimumBackgroundFetchInterval: (NSTimeInterval) minimumBackgroundFetchInterval ;
-(void) endIgnoringInteractionEvents;
-(void) sendEvent: (UIEvent *) event ;
JSExportAs(sendActionToFromForEvent,
-(BOOL) jssendAction: (NSString *) action to: (id) target from: (id) sender forEvent: (UIEvent *) event );
-(BOOL) openURL: (NSURL *) url ;
JSExportAs(beginBackgroundTaskWithExpirationHandler,
-(UIBackgroundTaskIdentifier) jsbeginBackgroundTaskWithExpirationHandler: (JSValue *) handler );
JSExportAs(openURLOptionsCompletionHandler,
-(void) jsopenURL: (NSURL *) url options: (NSDictionary *) options completionHandler: (JSValue *) completion );
-(BOOL) canOpenURL: (NSURL *) url ;
-(void) endBackgroundTask: (UIBackgroundTaskIdentifier) identifier ;
-(void) beginIgnoringInteractionEvents;
JSExportAs(beginBackgroundTaskWithNameExpirationHandler,
-(UIBackgroundTaskIdentifier) jsbeginBackgroundTaskWithName: (NSString *) taskName expirationHandler: (JSValue *) handler );
-(UIInterfaceOrientationMask) supportedInterfaceOrientationsForWindow: (UIWindow *) window ;
@end
@protocol UIApplicationClassExports<JSExport>
+(UIApplication *) sharedApplication;
@end
@protocol UIApplicationUIRemoteNotificationsCategoryInstanceExports<JSExport>
@property (getter=isRegisteredForRemoteNotifications,readonly,nonatomic) BOOL registeredForRemoteNotifications;
-(void) registerForRemoteNotificationTypes: (UIRemoteNotificationType) types ;
-(void) registerForRemoteNotifications;
-(UIRemoteNotificationType) enabledRemoteNotificationTypes;
-(void) unregisterForRemoteNotifications;
@end
@protocol UIApplicationUIRemoteNotificationsCategoryClassExports<JSExport>
@end
@protocol UIApplicationUIStateRestorationCategoryInstanceExports<JSExport>
-(void) completeStateRestoration;
-(void) ignoreSnapshotOnNextApplicationLaunch;
-(void) extendStateRestoration;
@end
@protocol UIApplicationUIStateRestorationCategoryClassExports<JSExport>
+(void) registerObjectForStateRestoration: (id) object restorationIdentifier: (NSString *) restorationIdentifier ;
@end
@protocol UIApplicationUIShortcutItemsCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * shortcutItems;
@end
@protocol UIApplicationUIShortcutItemsCategoryClassExports<JSExport>
@end
@protocol UIApplicationUIApplicationDeprecatedCategoryInstanceExports<JSExport>
@property (readwrite,nonatomic) UIInterfaceOrientation statusBarOrientation;
@property (readwrite,nonatomic) UIStatusBarStyle statusBarStyle;
@property (getter=isStatusBarHidden,readwrite,nonatomic) BOOL statusBarHidden;
@property (getter=isProximitySensingEnabled,nonatomic) BOOL proximitySensingEnabled;
-(void) setStatusBarHidden: (BOOL) hidden withAnimation: (UIStatusBarAnimation) animation ;
-(void) setStatusBarOrientation: (UIInterfaceOrientation) interfaceOrientation animated: (BOOL) animated ;
-(void) clearKeepAliveTimeout;
JSExportAs(setKeepAliveTimeoutHandler,
-(BOOL) jssetKeepAliveTimeout: (NSTimeInterval) timeout handler: (JSValue *) keepAliveHandler );
-(void) setStatusBarHidden: (BOOL) hidden animated: (BOOL) animated ;
-(void) setStatusBarStyle: (UIStatusBarStyle) statusBarStyle animated: (BOOL) animated ;
@end
@protocol UIApplicationUIApplicationDeprecatedCategoryClassExports<JSExport>
@end
@protocol UIApplicationUIAlternateApplicationIconsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSString * alternateIconName;
@property (readonly,nonatomic) BOOL supportsAlternateIcons;
JSExportAs(setAlternateIconNameCompletionHandler,
-(void) jssetAlternateIconName: (NSString *) alternateIconName completionHandler: (JSValue *) completionHandler );
@end
@protocol UIApplicationUIAlternateApplicationIconsCategoryClassExports<JSExport>
@end
@protocol UIApplicationDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (nonatomic,strong) UIWindow * window;
-(void) application: (UIApplication *) application didChangeStatusBarOrientation: (UIInterfaceOrientation) oldStatusBarOrientation ;
-(void) application: (UIApplication *) application didReceiveRemoteNotification: (NSDictionary *) userInfo ;
-(void) application: (UIApplication *) application didFailToRegisterForRemoteNotificationsWithError: (NSError *) error ;
-(BOOL) application: (UIApplication *) application shouldSaveApplicationState: (NSCoder *) coder ;
-(void) applicationProtectedDataDidBecomeAvailable: (UIApplication *) application ;
-(void) applicationDidEnterBackground: (UIApplication *) application ;
-(void) application: (UIApplication *) application didReceiveLocalNotification: (UILocalNotification *) notification ;
-(void) applicationWillTerminate: (UIApplication *) application ;
-(void) applicationWillEnterForeground: (UIApplication *) application ;
-(void) application: (UIApplication *) application didFailToContinueUserActivityWithType: (NSString *) userActivityType error: (NSError *) error ;
-(void) applicationWillResignActive: (UIApplication *) application ;
JSExportAs(applicationDidReceiveRemoteNotificationFetchCompletionHandler,
-(void) jsapplication: (UIApplication *) application didReceiveRemoteNotification: (NSDictionary *) userInfo fetchCompletionHandler: (JSValue *) completionHandler );
JSExportAs(applicationHandleWatchKitExtensionRequestReply,
-(void) jsapplication: (UIApplication *) application handleWatchKitExtensionRequest: (NSDictionary *) userInfo reply: (JSValue *) reply );
-(void) applicationSignificantTimeChange: (UIApplication *) application ;
-(BOOL) application: (UIApplication *) application willFinishLaunchingWithOptions: (NSDictionary *) launchOptions ;
-(BOOL) application: (UIApplication *) application openURL: (NSURL *) url sourceApplication: (NSString *) sourceApplication annotation: (id) annotation ;
JSExportAs(applicationPerformActionForShortcutItemCompletionHandler,
-(void) jsapplication: (UIApplication *) application performActionForShortcutItem: (UIApplicationShortcutItem *) shortcutItem completionHandler: (JSValue *) completionHandler );
-(BOOL) application: (UIApplication *) application shouldAllowExtensionPointIdentifier: (UIApplicationExtensionPointIdentifier) extensionPointIdentifier ;
-(void) applicationDidBecomeActive: (UIApplication *) application ;
JSExportAs(applicationHandleEventsForBackgroundURLSessionCompletionHandler,
-(void) jsapplication: (UIApplication *) application handleEventsForBackgroundURLSession: (NSString *) identifier completionHandler: (JSValue *) completionHandler );
-(void) application: (UIApplication *) application userDidAcceptCloudKitShareWithMetadata: (CKShareMetadata *) cloudKitShareMetadata ;
-(BOOL) application: (UIApplication *) application willContinueUserActivityWithType: (NSString *) userActivityType ;
-(void) application: (UIApplication *) application didChangeStatusBarFrame: (CGRect) oldStatusBarFrame ;
-(void) applicationProtectedDataWillBecomeUnavailable: (UIApplication *) application ;
-(void) application: (UIApplication *) application didUpdateUserActivity: (NSUserActivity *) userActivity ;
-(void) application: (UIApplication *) application didRegisterForRemoteNotificationsWithDeviceToken: (NSData *) deviceToken ;
-(void) application: (UIApplication *) application willEncodeRestorableStateWithCoder: (NSCoder *) coder ;
-(BOOL) application: (UIApplication *) application didFinishLaunchingWithOptions: (NSDictionary *) launchOptions ;
JSExportAs(applicationHandleIntentCompletionHandler,
-(void) jsapplication: (UIApplication *) application handleIntent: (INIntent *) intent completionHandler: (JSValue *) completionHandler );
JSExportAs(applicationContinueUserActivityRestorationHandler,
-(BOOL) jsapplication: (UIApplication *) application continueUserActivity: (NSUserActivity *) userActivity restorationHandler: (JSValue *) restorationHandler );
JSExportAs(applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler,
-(void) jsapplication: (UIApplication *) application handleActionWithIdentifier: (NSString *) identifier forRemoteNotification: (NSDictionary *) userInfo completionHandler: (JSValue *) completionHandler );
-(BOOL) application: (UIApplication *) application handleOpenURL: (NSURL *) url ;
-(void) application: (UIApplication *) application willChangeStatusBarOrientation: (UIInterfaceOrientation) newStatusBarOrientation duration: (NSTimeInterval) duration ;
JSExportAs(applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler,
-(void) jsapplication: (UIApplication *) application handleActionWithIdentifier: (NSString *) identifier forLocalNotification: (UILocalNotification *) notification withResponseInfo: (NSDictionary *) responseInfo completionHandler: (JSValue *) completionHandler );
JSExportAs(applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler,
-(void) jsapplication: (UIApplication *) application handleActionWithIdentifier: (NSString *) identifier forLocalNotification: (UILocalNotification *) notification completionHandler: (JSValue *) completionHandler );
-(void) application: (UIApplication *) application willChangeStatusBarFrame: (CGRect) newStatusBarFrame ;
JSExportAs(applicationPerformFetchWithCompletionHandler,
-(void) jsapplication: (UIApplication *) application performFetchWithCompletionHandler: (JSValue *) completionHandler );
JSExportAs(applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler,
-(void) jsapplication: (UIApplication *) application handleActionWithIdentifier: (NSString *) identifier forRemoteNotification: (NSDictionary *) userInfo withResponseInfo: (NSDictionary *) responseInfo completionHandler: (JSValue *) completionHandler );
-(BOOL) application: (UIApplication *) app openURL: (NSURL *) url options: (NSDictionary *) options ;
-(void) application: (UIApplication *) application didDecodeRestorableStateWithCoder: (NSCoder *) coder ;
-(void) applicationShouldRequestHealthAuthorization: (UIApplication *) application ;
-(UIViewController *) application: (UIApplication *) application viewControllerWithRestorationIdentifierPath: (NSArray *) identifierComponents coder: (NSCoder *) coder ;
-(void) applicationDidFinishLaunching: (UIApplication *) application ;
-(BOOL) application: (UIApplication *) application shouldRestoreApplicationState: (NSCoder *) coder ;
-(void) application: (UIApplication *) application didRegisterUserNotificationSettings: (UIUserNotificationSettings *) notificationSettings ;
-(void) applicationDidReceiveMemoryWarning: (UIApplication *) application ;
-(UIInterfaceOrientationMask) application: (UIApplication *) application supportedInterfaceOrientationsForWindow: (UIWindow *) window ;
@end
@protocol UIApplicationDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop