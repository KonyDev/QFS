#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIFontMetrics (Exports)
-(id) jsinitForTextStyle: (UIFontTextStyle) textStyle 
{
	id resultVal__;
	resultVal__ = [[self initForTextStyle: textStyle ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIFontMetrics class], @protocol(UIFontMetricsInstanceExports));
	class_addProtocol([UIFontMetrics class], @protocol(UIFontMetricsClassExports));
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
void load_UIKit_UIFontMetrics_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
