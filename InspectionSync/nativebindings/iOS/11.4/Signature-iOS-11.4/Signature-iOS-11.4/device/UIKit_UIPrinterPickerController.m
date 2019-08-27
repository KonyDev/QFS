#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPrinterPickerController (Exports)
-(BOOL) jspresentAnimated: (BOOL) animated completionHandler: (JSValue *) completion 
{
	void (^ completion_)(UIPrinterPickerController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrinterPickerController * arg0, BOOL arg1, NSError * arg2) {
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
	void (^ completion_)(UIPrinterPickerController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrinterPickerController * arg0, BOOL arg1, NSError * arg2) {
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
	void (^ completion_)(UIPrinterPickerController * , BOOL, NSError * ) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(UIPrinterPickerController * arg0, BOOL arg1, NSError * arg2) {
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
	class_addProtocol([UIPrinterPickerController class], @protocol(UIPrinterPickerControllerInstanceExports));
	class_addProtocol([UIPrinterPickerController class], @protocol(UIPrinterPickerControllerClassExports));
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
void UIKit_UIPrinterPickerControllerProtocols()
{
	(void)@protocol(UIPrinterPickerControllerDelegate);
}
void load_UIKit_UIPrinterPickerController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
