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
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCAFillModeForwards;
	if (p != NULL) context[@"kCAFillModeForwards"] = kCAFillModeForwards;
	p = (void*) &kCAFillModeRemoved;
	if (p != NULL) context[@"kCAFillModeRemoved"] = kCAFillModeRemoved;
	p = (void*) &kCAFillModeBoth;
	if (p != NULL) context[@"kCAFillModeBoth"] = kCAFillModeBoth;
	p = (void*) &kCAFillModeBackwards;
	if (p != NULL) context[@"kCAFillModeBackwards"] = kCAFillModeBackwards;
}
void QuartzCore_CAMediaTimingProtocols()
{
	(void)@protocol(CAMediaTiming);
}
void load_QuartzCore_CAMediaTiming_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
