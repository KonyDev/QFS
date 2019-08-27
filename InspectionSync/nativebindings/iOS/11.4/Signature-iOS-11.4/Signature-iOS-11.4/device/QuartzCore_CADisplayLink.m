#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CADisplayLink (Exports)
+(CADisplayLink *) jsdisplayLinkWithTarget: (id) target selector: (NSString *) sel 
{
	SEL sel_ = NSSelectorFromString(sel);
	CADisplayLink * resultVal__;
	resultVal__ = [self displayLinkWithTarget: target selector: sel_ ];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CADisplayLink class], @protocol(CADisplayLinkInstanceExports));
	class_addProtocol([CADisplayLink class], @protocol(CADisplayLinkClassExports));
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
}
void load_QuartzCore_CADisplayLink_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
