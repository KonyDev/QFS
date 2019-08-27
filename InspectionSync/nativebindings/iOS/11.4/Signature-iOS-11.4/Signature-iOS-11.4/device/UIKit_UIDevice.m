#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([UIDevice class], @protocol(UIDeviceInstanceExports));
	class_addProtocol([UIDevice class], @protocol(UIDeviceClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"UI_USER_INTERFACE_IDIOM"] = ^UIUserInterfaceIdiom() {
		return UI_USER_INTERFACE_IDIOM();
	};
	context[@"UIDeviceOrientationIsPortrait"] = ^BOOL(UIDeviceOrientation arg0) {
		return UIDeviceOrientationIsPortrait(arg0);
	};
	context[@"UIDeviceOrientationIsLandscape"] = ^BOOL(UIDeviceOrientation arg0) {
		return UIDeviceOrientationIsLandscape(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIDeviceOrientationUnknown"] = @0;
	context[@"UIDeviceOrientationPortrait"] = @1;
	context[@"UIDeviceOrientationPortraitUpsideDown"] = @2;
	context[@"UIDeviceOrientationLandscapeLeft"] = @3;
	context[@"UIDeviceOrientationLandscapeRight"] = @4;
	context[@"UIDeviceOrientationFaceUp"] = @5;
	context[@"UIDeviceOrientationFaceDown"] = @6;

	context[@"UIDeviceBatteryStateUnknown"] = @0;
	context[@"UIDeviceBatteryStateUnplugged"] = @1;
	context[@"UIDeviceBatteryStateCharging"] = @2;
	context[@"UIDeviceBatteryStateFull"] = @3;

	context[@"UIUserInterfaceIdiomUnspecified"] = @-1;
	context[@"UIUserInterfaceIdiomPhone"] = @0;
	context[@"UIUserInterfaceIdiomPad"] = @1;
	context[@"UIUserInterfaceIdiomTV"] = @2;
	context[@"UIUserInterfaceIdiomCarPlay"] = @3;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIDeviceProximityStateDidChangeNotification;
	if (p != NULL) context[@"UIDeviceProximityStateDidChangeNotification"] = UIDeviceProximityStateDidChangeNotification;
	p = (void*) &UIDeviceBatteryStateDidChangeNotification;
	if (p != NULL) context[@"UIDeviceBatteryStateDidChangeNotification"] = UIDeviceBatteryStateDidChangeNotification;
	p = (void*) &UIDeviceBatteryLevelDidChangeNotification;
	if (p != NULL) context[@"UIDeviceBatteryLevelDidChangeNotification"] = UIDeviceBatteryLevelDidChangeNotification;
	p = (void*) &UIDeviceOrientationDidChangeNotification;
	if (p != NULL) context[@"UIDeviceOrientationDidChangeNotification"] = UIDeviceOrientationDidChangeNotification;
}
void UIKit_UIDeviceProtocols()
{
	(void)@protocol(UIInputViewAudioFeedback);
}
void load_UIKit_UIDevice_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
