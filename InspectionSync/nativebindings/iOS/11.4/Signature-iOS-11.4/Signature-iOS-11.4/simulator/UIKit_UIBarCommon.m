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
	context[@"UIBarMetricsDefault"] = @0L;
	context[@"UIBarMetricsCompact"] = @1L;
	context[@"UIBarMetricsDefaultPrompt"] = @101L;
	context[@"UIBarMetricsCompactPrompt"] = @102L;
	context[@"UIBarMetricsLandscapePhone"] = @1L;
	context[@"UIBarMetricsLandscapePhonePrompt"] = @102L;

	context[@"UIBarPositionAny"] = @0L;
	context[@"UIBarPositionBottom"] = @1L;
	context[@"UIBarPositionTop"] = @2L;
	context[@"UIBarPositionTopAttached"] = @3L;

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
