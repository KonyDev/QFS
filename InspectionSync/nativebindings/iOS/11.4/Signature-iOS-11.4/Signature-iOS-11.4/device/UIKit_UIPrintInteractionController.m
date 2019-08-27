#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPrintInteractionController (Exports)
-(BOOL) jsprintToPrinter: (UIPrinter *) printer completionHandler: (JSValue *) completion 
{
	void (^ completion_)(UIPrintInteractionController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrintInteractionController * arg0, BOOL arg1, NSError * arg2) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	BOOL resultVal__;
	resultVal__ = [self printToPrinter: printer completionHandler: completion_ ];
	return resultVal__;
}
-(BOOL) jspresentAnimated: (BOOL) animated completionHandler: (JSValue *) completion 
{
	void (^ completion_)(UIPrintInteractionController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrintInteractionController * arg0, BOOL arg1, NSError * arg2) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	BOOL resultVal__;
	resultVal__ = [self presentAnimated: animated completionHandler: completion_ ];
	return resultVal__;
}
-(BOOL) jspresentFromBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated completionHandler: (JSValue *) completion 
{
	void (^ completion_)(UIPrintInteractionController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrintInteractionController * arg0, BOOL arg1, NSError * arg2) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	BOOL resultVal__;
	resultVal__ = [self presentFromBarButtonItem: item animated: animated completionHandler: completion_ ];
	return resultVal__;
}
-(BOOL) jspresentFromRect: (CGRect) rect inView: (UIView *) view animated: (BOOL) animated completionHandler: (JSValue *) completion 
{
	void (^ completion_)(UIPrintInteractionController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrintInteractionController * arg0, BOOL arg1, NSError * arg2) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	BOOL resultVal__;
	resultVal__ = [self presentFromRect: rect inView: view animated: animated completionHandler: completion_ ];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIPrintInteractionController class], @protocol(UIPrintInteractionControllerInstanceExports));
	class_addProtocol([UIPrintInteractionController class], @protocol(UIPrintInteractionControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPrinterCutterBehaviorNoCut"] = @0;
	context[@"UIPrinterCutterBehaviorPrinterDefault"] = @1;
	context[@"UIPrinterCutterBehaviorCutAfterEachPage"] = @2;
	context[@"UIPrinterCutterBehaviorCutAfterEachCopy"] = @3;
	context[@"UIPrinterCutterBehaviorCutAfterEachJob"] = @4;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIPrintInteractionControllerProtocols()
{
	(void)@protocol(UIPrintInteractionControllerDelegate);
}
void load_UIKit_UIPrintInteractionController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
