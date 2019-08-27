#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDocumentBrowserAction (Exports)
-(id) jsinitWithIdentifier: (NSString *) identifier localizedTitle: (NSString *) localizedTitle availability: (UIDocumentBrowserActionAvailability) availability handler: (JSValue *) handler 
{
	void (^ handler_)(NSArray * ) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void(NSArray * arg0) {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithIdentifier: identifier localizedTitle: localizedTitle availability: availability handler: handler_ ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDocumentBrowserAction class], @protocol(UIDocumentBrowserActionInstanceExports));
	class_addProtocol([UIDocumentBrowserAction class], @protocol(UIDocumentBrowserActionClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIDocumentBrowserActionAvailabilityMenu"] = @1;
	context[@"UIDocumentBrowserActionAvailabilityNavigationBar"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_DocumentManager_UIDocumentBrowserAction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
