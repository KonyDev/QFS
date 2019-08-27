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
	class_addProtocol([CALayer class], @protocol(CALayerCALayerScrollingCategoryInstanceExports));
	class_addProtocol([CALayer class], @protocol(CALayerCALayerScrollingCategoryClassExports));
	class_addProtocol([CAScrollLayer class], @protocol(CAScrollLayerInstanceExports));
	class_addProtocol([CAScrollLayer class], @protocol(CAScrollLayerClassExports));
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
	p = (void*) &kCAScrollBoth;
	if (p != NULL) context[@"kCAScrollBoth"] = kCAScrollBoth;
	p = (void*) &kCAScrollNone;
	if (p != NULL) context[@"kCAScrollNone"] = kCAScrollNone;
	p = (void*) &kCAScrollHorizontally;
	if (p != NULL) context[@"kCAScrollHorizontally"] = kCAScrollHorizontally;
	p = (void*) &kCAScrollVertically;
	if (p != NULL) context[@"kCAScrollVertically"] = kCAScrollVertically;
}
void load_QuartzCore_CAScrollLayer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
