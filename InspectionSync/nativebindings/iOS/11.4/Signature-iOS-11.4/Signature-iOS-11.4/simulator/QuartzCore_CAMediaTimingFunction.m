#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CAMediaTimingFunction (Exports)
-(id) jsinitWithControlPoints: (float) c1x : (float) c1y : (float) c2x : (float) c2y 
{
	id resultVal__;
	resultVal__ = [[self initWithControlPoints: c1x : c1y : c2x : c2y ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CAMediaTimingFunction class], @protocol(CAMediaTimingFunctionInstanceExports));
	class_addProtocol([CAMediaTimingFunction class], @protocol(CAMediaTimingFunctionClassExports));
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
	p = (void*) &kCAMediaTimingFunctionEaseIn;
	if (p != NULL) context[@"kCAMediaTimingFunctionEaseIn"] = kCAMediaTimingFunctionEaseIn;
	p = (void*) &kCAMediaTimingFunctionEaseInEaseOut;
	if (p != NULL) context[@"kCAMediaTimingFunctionEaseInEaseOut"] = kCAMediaTimingFunctionEaseInEaseOut;
	p = (void*) &kCAMediaTimingFunctionLinear;
	if (p != NULL) context[@"kCAMediaTimingFunctionLinear"] = kCAMediaTimingFunctionLinear;
	p = (void*) &kCAMediaTimingFunctionEaseOut;
	if (p != NULL) context[@"kCAMediaTimingFunctionEaseOut"] = kCAMediaTimingFunctionEaseOut;
	p = (void*) &kCAMediaTimingFunctionDefault;
	if (p != NULL) context[@"kCAMediaTimingFunctionDefault"] = kCAMediaTimingFunctionDefault;
}
void load_QuartzCore_CAMediaTimingFunction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
