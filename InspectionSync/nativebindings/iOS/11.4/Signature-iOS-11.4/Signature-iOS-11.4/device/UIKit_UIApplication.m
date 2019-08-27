#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIApplication (Exports)
-(BOOL) jssendAction: (NSString *) action to: (id) target from: (id) sender forEvent: (UIEvent *) event 
{
	SEL action_ = NSSelectorFromString(action);
	BOOL resultVal__;
	resultVal__ = [self sendAction: action_ to: target from: sender forEvent: event ];
	return resultVal__;
}
-(UIBackgroundTaskIdentifier) jsbeginBackgroundTaskWithName: (NSString *) taskName expirationHandler: (JSValue *) handler 
{
	void (^ handler_)(void) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void() {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	UIBackgroundTaskIdentifier resultVal__;
	resultVal__ = [self beginBackgroundTaskWithName: taskName expirationHandler: handler_ ];
	return resultVal__;
}
-(UIBackgroundTaskIdentifier) jsbeginBackgroundTaskWithExpirationHandler: (JSValue *) handler 
{
	void (^ handler_)(void) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void() {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	UIBackgroundTaskIdentifier resultVal__;
	resultVal__ = [self beginBackgroundTaskWithExpirationHandler: handler_ ];
	return resultVal__;
}
-(void) jsopenURL: (NSURL *) url options: (NSDictionary *) options completionHandler: (JSValue *) completion 
{
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self openURL: url options: options completionHandler: completion_ ];
}
@end
@implementation UIApplication (UIApplicationUIApplicationDeprecatedCategoryExports)
-(BOOL) jssetKeepAliveTimeout: (NSTimeInterval) timeout handler: (JSValue *) keepAliveHandler 
{
	void (^ keepAliveHandler_)(void) = nil;
	if (!keepAliveHandler.isUndefined) {
		keepAliveHandler_ = ^void() {
			JSContext* __jsContext = keepAliveHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, keepAliveHandler, self, parameters);
		};
	}
	BOOL resultVal__;
	resultVal__ = [self setKeepAliveTimeout: timeout handler: keepAliveHandler_ ];
	return resultVal__;
}
@end
@implementation UIApplication (UIApplicationUIAlternateApplicationIconsCategoryExports)
-(void) jssetAlternateIconName: (NSString *) alternateIconName completionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSError * arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self setAlternateIconName: alternateIconName completionHandler: completionHandler_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIUserNotificationSettingsCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIUserNotificationSettingsCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUINewsstandCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUINewsstandCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIRemoteControlEventsCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIRemoteControlEventsCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUILocalNotificationsCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUILocalNotificationsCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIRemoteNotificationsCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIRemoteNotificationsCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIStateRestorationCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIStateRestorationCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIShortcutItemsCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIShortcutItemsCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIApplicationDeprecatedCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIApplicationDeprecatedCategoryClassExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIAlternateApplicationIconsCategoryInstanceExports));
	class_addProtocol([UIApplication class], @protocol(UIApplicationUIAlternateApplicationIconsCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"UIInterfaceOrientationIsPortrait"] = ^BOOL(UIInterfaceOrientation arg0) {
		return UIInterfaceOrientationIsPortrait(arg0);
	};
	context[@"UIInterfaceOrientationIsLandscape"] = ^BOOL(UIInterfaceOrientation arg0) {
		return UIInterfaceOrientationIsLandscape(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIStatusBarStyleDefault"] = @0;
	context[@"UIStatusBarStyleLightContent"] = @1;
	context[@"UIStatusBarStyleBlackTranslucent"] = @1;
	context[@"UIStatusBarStyleBlackOpaque"] = @2;

	context[@"UIStatusBarAnimationNone"] = @0;
	context[@"UIStatusBarAnimationFade"] = @1;
	context[@"UIStatusBarAnimationSlide"] = @2;

	context[@"UIInterfaceOrientationUnknown"] = @0;
	context[@"UIInterfaceOrientationPortrait"] = @1;
	context[@"UIInterfaceOrientationPortraitUpsideDown"] = @2;
	context[@"UIInterfaceOrientationLandscapeLeft"] = @4;
	context[@"UIInterfaceOrientationLandscapeRight"] = @3;

	context[@"UIInterfaceOrientationMaskPortrait"] = @2U;
	context[@"UIInterfaceOrientationMaskLandscapeLeft"] = @16U;
	context[@"UIInterfaceOrientationMaskLandscapeRight"] = @8U;
	context[@"UIInterfaceOrientationMaskPortraitUpsideDown"] = @4U;
	context[@"UIInterfaceOrientationMaskLandscape"] = @24U;
	context[@"UIInterfaceOrientationMaskAll"] = @30U;
	context[@"UIInterfaceOrientationMaskAllButUpsideDown"] = @26U;

	context[@"UIRemoteNotificationTypeNone"] = @0U;
	context[@"UIRemoteNotificationTypeBadge"] = @1U;
	context[@"UIRemoteNotificationTypeSound"] = @2U;
	context[@"UIRemoteNotificationTypeAlert"] = @4U;
	context[@"UIRemoteNotificationTypeNewsstandContentAvailability"] = @8U;

	context[@"UIBackgroundFetchResultNewData"] = @0U;
	context[@"UIBackgroundFetchResultNoData"] = @1U;
	context[@"UIBackgroundFetchResultFailed"] = @2U;

	context[@"UIBackgroundRefreshStatusRestricted"] = @0;
	context[@"UIBackgroundRefreshStatusDenied"] = @1;
	context[@"UIBackgroundRefreshStatusAvailable"] = @2;

	context[@"UIApplicationStateActive"] = @0;
	context[@"UIApplicationStateInactive"] = @1;
	context[@"UIApplicationStateBackground"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIApplicationStatusBarFrameUserInfoKey;
	if (p != NULL) context[@"UIApplicationStatusBarFrameUserInfoKey"] = UIApplicationStatusBarFrameUserInfoKey;
	p = (void*) &UIApplicationLaunchOptionsUserActivityDictionaryKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsUserActivityDictionaryKey"] = UIApplicationLaunchOptionsUserActivityDictionaryKey;
	p = (void*) &UIApplicationLaunchOptionsAnnotationKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsAnnotationKey"] = UIApplicationLaunchOptionsAnnotationKey;
	p = (void*) &UIApplicationProtectedDataDidBecomeAvailable;
	if (p != NULL) context[@"UIApplicationProtectedDataDidBecomeAvailable"] = UIApplicationProtectedDataDidBecomeAvailable;
	p = (void*) &UIApplicationWillTerminateNotification;
	if (p != NULL) context[@"UIApplicationWillTerminateNotification"] = UIApplicationWillTerminateNotification;
	p = (void*) &UIApplicationLaunchOptionsCloudKitShareMetadataKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsCloudKitShareMetadataKey"] = UIApplicationLaunchOptionsCloudKitShareMetadataKey;
	p = (void*) &UITrackingRunLoopMode;
	if (p != NULL) context[@"UITrackingRunLoopMode"] = UITrackingRunLoopMode;
	p = (void*) &UIApplicationLaunchOptionsRemoteNotificationKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsRemoteNotificationKey"] = UIApplicationLaunchOptionsRemoteNotificationKey;
	p = (void*) &UIApplicationLaunchOptionsLocationKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsLocationKey"] = UIApplicationLaunchOptionsLocationKey;
	p = (void*) &UIApplicationWillEnterForegroundNotification;
	if (p != NULL) context[@"UIApplicationWillEnterForegroundNotification"] = UIApplicationWillEnterForegroundNotification;
	p = (void*) &UIApplicationDidChangeStatusBarOrientationNotification;
	if (p != NULL) context[@"UIApplicationDidChangeStatusBarOrientationNotification"] = UIApplicationDidChangeStatusBarOrientationNotification;
	p = (void*) &UIApplicationLaunchOptionsLocalNotificationKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsLocalNotificationKey"] = UIApplicationLaunchOptionsLocalNotificationKey;
	p = (void*) &UIApplicationInvalidInterfaceOrientationException;
	if (p != NULL) context[@"UIApplicationInvalidInterfaceOrientationException"] = UIApplicationInvalidInterfaceOrientationException;
	p = (void*) &UIApplicationProtectedDataWillBecomeUnavailable;
	if (p != NULL) context[@"UIApplicationProtectedDataWillBecomeUnavailable"] = UIApplicationProtectedDataWillBecomeUnavailable;
	p = (void*) &UIApplicationLaunchOptionsUserActivityTypeKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsUserActivityTypeKey"] = UIApplicationLaunchOptionsUserActivityTypeKey;
	p = (void*) &UIApplicationWillChangeStatusBarFrameNotification;
	if (p != NULL) context[@"UIApplicationWillChangeStatusBarFrameNotification"] = UIApplicationWillChangeStatusBarFrameNotification;
	p = (void*) &UIBackgroundTaskInvalid;
	if (p != NULL) context[@"UIBackgroundTaskInvalid"] = @(UIBackgroundTaskInvalid);
	p = (void*) &UIApplicationLaunchOptionsURLKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsURLKey"] = UIApplicationLaunchOptionsURLKey;
	p = (void*) &UIApplicationOpenURLOptionsOpenInPlaceKey;
	if (p != NULL) context[@"UIApplicationOpenURLOptionsOpenInPlaceKey"] = UIApplicationOpenURLOptionsOpenInPlaceKey;
	p = (void*) &UIApplicationDidFinishLaunchingNotification;
	if (p != NULL) context[@"UIApplicationDidFinishLaunchingNotification"] = UIApplicationDidFinishLaunchingNotification;
	p = (void*) &UIApplicationDidBecomeActiveNotification;
	if (p != NULL) context[@"UIApplicationDidBecomeActiveNotification"] = UIApplicationDidBecomeActiveNotification;
	p = (void*) &UIApplicationWillChangeStatusBarOrientationNotification;
	if (p != NULL) context[@"UIApplicationWillChangeStatusBarOrientationNotification"] = UIApplicationWillChangeStatusBarOrientationNotification;
	p = (void*) &UIApplicationBackgroundFetchIntervalMinimum;
	if (p != NULL) context[@"UIApplicationBackgroundFetchIntervalMinimum"] = @(UIApplicationBackgroundFetchIntervalMinimum);
	p = (void*) &UIMinimumKeepAliveTimeout;
	if (p != NULL) context[@"UIMinimumKeepAliveTimeout"] = @(UIMinimumKeepAliveTimeout);
	p = (void*) &UIApplicationStatusBarOrientationUserInfoKey;
	if (p != NULL) context[@"UIApplicationStatusBarOrientationUserInfoKey"] = UIApplicationStatusBarOrientationUserInfoKey;
	p = (void*) &UIApplicationUserDidTakeScreenshotNotification;
	if (p != NULL) context[@"UIApplicationUserDidTakeScreenshotNotification"] = UIApplicationUserDidTakeScreenshotNotification;
	p = (void*) &UIApplicationOpenSettingsURLString;
	if (p != NULL) context[@"UIApplicationOpenSettingsURLString"] = UIApplicationOpenSettingsURLString;
	p = (void*) &UIApplicationKeyboardExtensionPointIdentifier;
	if (p != NULL) context[@"UIApplicationKeyboardExtensionPointIdentifier"] = UIApplicationKeyboardExtensionPointIdentifier;
	p = (void*) &UIApplicationLaunchOptionsBluetoothCentralsKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsBluetoothCentralsKey"] = UIApplicationLaunchOptionsBluetoothCentralsKey;
	p = (void*) &UIApplicationWillResignActiveNotification;
	if (p != NULL) context[@"UIApplicationWillResignActiveNotification"] = UIApplicationWillResignActiveNotification;
	p = (void*) &UIApplicationLaunchOptionsShortcutItemKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsShortcutItemKey"] = UIApplicationLaunchOptionsShortcutItemKey;
	p = (void*) &UIApplicationBackgroundFetchIntervalNever;
	if (p != NULL) context[@"UIApplicationBackgroundFetchIntervalNever"] = @(UIApplicationBackgroundFetchIntervalNever);
	p = (void*) &UIApplicationDidReceiveMemoryWarningNotification;
	if (p != NULL) context[@"UIApplicationDidReceiveMemoryWarningNotification"] = UIApplicationDidReceiveMemoryWarningNotification;
	p = (void*) &UIApplicationOpenURLOptionsSourceApplicationKey;
	if (p != NULL) context[@"UIApplicationOpenURLOptionsSourceApplicationKey"] = UIApplicationOpenURLOptionsSourceApplicationKey;
	p = (void*) &UIApplicationLaunchOptionsBluetoothPeripheralsKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsBluetoothPeripheralsKey"] = UIApplicationLaunchOptionsBluetoothPeripheralsKey;
	p = (void*) &UIApplicationSignificantTimeChangeNotification;
	if (p != NULL) context[@"UIApplicationSignificantTimeChangeNotification"] = UIApplicationSignificantTimeChangeNotification;
	p = (void*) &UIApplicationDidChangeStatusBarFrameNotification;
	if (p != NULL) context[@"UIApplicationDidChangeStatusBarFrameNotification"] = UIApplicationDidChangeStatusBarFrameNotification;
	p = (void*) &UIApplicationOpenURLOptionUniversalLinksOnly;
	if (p != NULL) context[@"UIApplicationOpenURLOptionUniversalLinksOnly"] = UIApplicationOpenURLOptionUniversalLinksOnly;
	p = (void*) &UIApplicationLaunchOptionsNewsstandDownloadsKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsNewsstandDownloadsKey"] = UIApplicationLaunchOptionsNewsstandDownloadsKey;
	p = (void*) &UIApplicationLaunchOptionsSourceApplicationKey;
	if (p != NULL) context[@"UIApplicationLaunchOptionsSourceApplicationKey"] = UIApplicationLaunchOptionsSourceApplicationKey;
	p = (void*) &UIApplicationDidEnterBackgroundNotification;
	if (p != NULL) context[@"UIApplicationDidEnterBackgroundNotification"] = UIApplicationDidEnterBackgroundNotification;
	p = (void*) &UIApplicationOpenURLOptionsAnnotationKey;
	if (p != NULL) context[@"UIApplicationOpenURLOptionsAnnotationKey"] = UIApplicationOpenURLOptionsAnnotationKey;
	p = (void*) &UIApplicationBackgroundRefreshStatusDidChangeNotification;
	if (p != NULL) context[@"UIApplicationBackgroundRefreshStatusDidChangeNotification"] = UIApplicationBackgroundRefreshStatusDidChangeNotification;
}
void UIKit_UIApplicationProtocols()
{
	(void)@protocol(UIApplicationDelegate);
}
void load_UIKit_UIApplication_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
