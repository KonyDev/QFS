#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIStoryboardUnwindSegueSource (Exports)
-(NSString *) getJsUnwindAction
{
	return NSStringFromSelector(self.unwindAction);
}
@end
@implementation UIStoryboardSegue (Exports)
-(id) jsinitWithIdentifier: (NSString *) identifier source: (UIViewController *) source destination: (UIViewController *) destination 
{
	id resultVal__;
	resultVal__ = [[self initWithIdentifier: identifier source: source destination: destination ] autorelease];
	return resultVal__;
}
+(id) jssegueWithIdentifier: (NSString *) identifier source: (UIViewController *) source destination: (UIViewController *) destination performHandler: (JSValue *) performHandler 
{
	void (^ performHandler_)(void) = nil;
	if (!performHandler.isUndefined) {
		performHandler_ = ^void() {
			JSContext* __jsContext = performHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, performHandler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [self segueWithIdentifier: identifier source: source destination: destination performHandler: performHandler_ ];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIStoryboardUnwindSegueSource class], @protocol(UIStoryboardUnwindSegueSourceInstanceExports));
	class_addProtocol([UIStoryboardUnwindSegueSource class], @protocol(UIStoryboardUnwindSegueSourceClassExports));
	class_addProtocol([UIStoryboardSegue class], @protocol(UIStoryboardSegueInstanceExports));
	class_addProtocol([UIStoryboardSegue class], @protocol(UIStoryboardSegueClassExports));
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
void load_UIKit_UIStoryboardSegue_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
