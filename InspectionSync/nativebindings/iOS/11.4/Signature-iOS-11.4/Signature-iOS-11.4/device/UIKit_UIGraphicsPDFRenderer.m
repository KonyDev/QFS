#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIGraphicsPDFRenderer (Exports)
-(BOOL) jswritePDFToURL: (NSURL *) url withActions: (JSValue *) actions error: (JSValue *) error 
{
	void (^ actions_)(UIGraphicsPDFRendererContext * ) = nil;
	if (!actions.isUndefined) {
		actions_ = ^void(UIGraphicsPDFRendererContext * arg0) {
			JSContext* __jsContext = actions.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, actions, self, parameters);
		};
	}
	NSError* error_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writePDFToURL: url withActions: actions_ error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(NSData *) jsPDFDataWithActions: (JSValue *) actions 
{
	void (^ actions_)(UIGraphicsPDFRendererContext * ) = nil;
	if (!actions.isUndefined) {
		actions_ = ^void(UIGraphicsPDFRendererContext * arg0) {
			JSContext* __jsContext = actions.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, actions, self, parameters);
		};
	}
	NSData * resultVal__;
	resultVal__ = [self PDFDataWithActions: actions_ ];
	return resultVal__;
}
-(id) jsinitWithBounds: (CGRect) bounds format: (UIGraphicsPDFRendererFormat *) format 
{
	id resultVal__;
	resultVal__ = [[self initWithBounds: bounds format: format ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIGraphicsPDFRenderer class], @protocol(UIGraphicsPDFRendererInstanceExports));
	class_addProtocol([UIGraphicsPDFRenderer class], @protocol(UIGraphicsPDFRendererClassExports));
	class_addProtocol([UIGraphicsPDFRendererFormat class], @protocol(UIGraphicsPDFRendererFormatInstanceExports));
	class_addProtocol([UIGraphicsPDFRendererFormat class], @protocol(UIGraphicsPDFRendererFormatClassExports));
	class_addProtocol([UIGraphicsPDFRendererContext class], @protocol(UIGraphicsPDFRendererContextInstanceExports));
	class_addProtocol([UIGraphicsPDFRendererContext class], @protocol(UIGraphicsPDFRendererContextClassExports));
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
void load_UIKit_UIGraphicsPDFRenderer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
