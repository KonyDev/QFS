#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIScrollView (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIScrollView class], @protocol(UIScrollViewInstanceExports));
	class_addProtocol([UIScrollView class], @protocol(UIScrollViewClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIScrollViewIndicatorStyleDefault"] = @0;
	context[@"UIScrollViewIndicatorStyleBlack"] = @1;
	context[@"UIScrollViewIndicatorStyleWhite"] = @2;

	context[@"UIScrollViewKeyboardDismissModeNone"] = @0;
	context[@"UIScrollViewKeyboardDismissModeOnDrag"] = @1;
	context[@"UIScrollViewKeyboardDismissModeInteractive"] = @2;

	context[@"UIScrollViewIndexDisplayModeAutomatic"] = @0;
	context[@"UIScrollViewIndexDisplayModeAlwaysHidden"] = @1;

	context[@"UIScrollViewContentInsetAdjustmentAutomatic"] = @0;
	context[@"UIScrollViewContentInsetAdjustmentScrollableAxes"] = @1;
	context[@"UIScrollViewContentInsetAdjustmentNever"] = @2;
	context[@"UIScrollViewContentInsetAdjustmentAlways"] = @3;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIScrollViewDecelerationRateFast;
	if (p != NULL) context[@"UIScrollViewDecelerationRateFast"] = @(UIScrollViewDecelerationRateFast);
	p = (void*) &UIScrollViewDecelerationRateNormal;
	if (p != NULL) context[@"UIScrollViewDecelerationRateNormal"] = @(UIScrollViewDecelerationRateNormal);
}
void UIKit_UIScrollViewProtocols()
{
	(void)@protocol(UIScrollViewDelegate);
}
void load_UIKit_UIScrollView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
