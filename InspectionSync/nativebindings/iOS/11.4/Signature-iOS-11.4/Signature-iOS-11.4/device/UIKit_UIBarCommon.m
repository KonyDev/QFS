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
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIBarMetricsDefault"] = @0;
	context[@"UIBarMetricsCompact"] = @1;
	context[@"UIBarMetricsDefaultPrompt"] = @101;
	context[@"UIBarMetricsCompactPrompt"] = @102;
	context[@"UIBarMetricsLandscapePhone"] = @1;
	context[@"UIBarMetricsLandscapePhonePrompt"] = @102;

	context[@"UIBarPositionAny"] = @0;
	context[@"UIBarPositionBottom"] = @1;
	context[@"UIBarPositionTop"] = @2;
	context[@"UIBarPositionTopAttached"] = @3;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIBarCommonProtocols()
{
	(void)@protocol(UIBarPositioning);
	(void)@protocol(UIBarPositioningDelegate);
}
void load_UIKit_UIBarCommon_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
