#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIGraphicsImageRenderer (Exports)
-(NSData *) jsJPEGDataWithCompressionQuality: (CGFloat) compressionQuality actions: (JSValue *) actions 
{
	void (^ actions_)(UIGraphicsImageRendererContext * ) = nil;
	if (!actions.isUndefined) {
		actions_ = ^void(UIGraphicsImageRendererContext * arg0) {
			JSContext* __jsContext = actions.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, actions, self, parameters);
		};
	}
	NSData * resultVal__;
	resultVal__ = [self JPEGDataWithCompressionQuality: compressionQuality actions: actions_ ];
	return resultVal__;
}
-(id) jsinitWithSize: (CGSize) size 
{
	id resultVal__;
	resultVal__ = [[self initWithSize: size ] autorelease];
	return resultVal__;
}
-(UIImage *) jsimageWithActions: (JSValue *) actions 
{
	void (^ actions_)(UIGraphicsImageRendererContext * ) = nil;
	if (!actions.isUndefined) {
		actions_ = ^void(UIGraphicsImageRendererContext * arg0) {
			JSContext* __jsContext = actions.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, actions, self, parameters);
		};
	}
	UIImage * resultVal__;
	resultVal__ = [self imageWithActions: actions_ ];
	return resultVal__;
}
-(NSData *) jsPNGDataWithActions: (JSValue *) actions 
{
	void (^ actions_)(UIGraphicsImageRendererContext * ) = nil;
	if (!actions.isUndefined) {
		actions_ = ^void(UIGraphicsImageRendererContext * arg0) {
			JSContext* __jsContext = actions.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, actions, self, parameters);
		};
	}
	NSData * resultVal__;
	resultVal__ = [self PNGDataWithActions: actions_ ];
	return resultVal__;
}
-(id) jsinitWithBounds: (CGRect) bounds format: (UIGraphicsImageRendererFormat *) format 
{
	id resultVal__;
	resultVal__ = [[self initWithBounds: bounds format: format ] autorelease];
	return resultVal__;
}
-(id) jsinitWithSize: (CGSize) size format: (UIGraphicsImageRendererFormat *) format 
{
	id resultVal__;
	resultVal__ = [[self initWithSize: size format: format ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIGraphicsImageRendererContext class], @protocol(UIGraphicsImageRendererContextInstanceExports));
	class_addProtocol([UIGraphicsImageRendererContext class], @protocol(UIGraphicsImageRendererContextClassExports));
	class_addProtocol([UIGraphicsImageRenderer class], @protocol(UIGraphicsImageRendererInstanceExports));
	class_addProtocol([UIGraphicsImageRenderer class], @protocol(UIGraphicsImageRendererClassExports));
	class_addProtocol([UIGraphicsImageRendererFormat class], @protocol(UIGraphicsImageRendererFormatInstanceExports));
	class_addProtocol([UIGraphicsImageRendererFormat class], @protocol(UIGraphicsImageRendererFormatClassExports));
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
void load_UIKit_UIGraphicsImageRenderer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
