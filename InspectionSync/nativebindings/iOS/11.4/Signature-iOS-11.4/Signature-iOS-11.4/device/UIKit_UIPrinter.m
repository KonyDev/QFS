#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPrinter (Exports)
-(void) jscontactPrinter: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(BOOL) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self contactPrinter: completionHandler_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIPrinter class], @protocol(UIPrinterInstanceExports));
	class_addProtocol([UIPrinter class], @protocol(UIPrinterClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPrinterJobTypeUnknown"] = @0;
	context[@"UIPrinterJobTypeDocument"] = @1;
	context[@"UIPrinterJobTypeEnvelope"] = @2;
	context[@"UIPrinterJobTypeLabel"] = @4;
	context[@"UIPrinterJobTypePhoto"] = @8;
	context[@"UIPrinterJobTypeReceipt"] = @16;
	context[@"UIPrinterJobTypeRoll"] = @32;
	context[@"UIPrinterJobTypeLargeFormat"] = @64;
	context[@"UIPrinterJobTypePostcard"] = @128;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIPrinter_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
