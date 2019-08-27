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
	class_addProtocol([CATextLayer class], @protocol(CATextLayerInstanceExports));
	class_addProtocol([CATextLayer class], @protocol(CATextLayerClassExports));
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
	p = (void*) &kCATruncationMiddle;
	if (p != NULL) context[@"kCATruncationMiddle"] = kCATruncationMiddle;
	p = (void*) &kCAAlignmentNatural;
	if (p != NULL) context[@"kCAAlignmentNatural"] = kCAAlignmentNatural;
	p = (void*) &kCATruncationEnd;
	if (p != NULL) context[@"kCATruncationEnd"] = kCATruncationEnd;
	p = (void*) &kCAAlignmentCenter;
	if (p != NULL) context[@"kCAAlignmentCenter"] = kCAAlignmentCenter;
	p = (void*) &kCAAlignmentRight;
	if (p != NULL) context[@"kCAAlignmentRight"] = kCAAlignmentRight;
	p = (void*) &kCAAlignmentJustified;
	if (p != NULL) context[@"kCAAlignmentJustified"] = kCAAlignmentJustified;
	p = (void*) &kCATruncationNone;
	if (p != NULL) context[@"kCATruncationNone"] = kCATruncationNone;
	p = (void*) &kCAAlignmentLeft;
	if (p != NULL) context[@"kCAAlignmentLeft"] = kCAAlignmentLeft;
	p = (void*) &kCATruncationStart;
	if (p != NULL) context[@"kCATruncationStart"] = kCATruncationStart;
}
void load_QuartzCore_CATextLayer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
