#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UISearchDisplayController (Exports)
-(id) jsinitWithSearchBar: (UISearchBar *) searchBar contentsController: (UIViewController *) viewController 
{
	id resultVal__;
	resultVal__ = [[self initWithSearchBar: searchBar contentsController: viewController ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UISearchDisplayController class], @protocol(UISearchDisplayControllerInstanceExports));
	class_addProtocol([UISearchDisplayController class], @protocol(UISearchDisplayControllerClassExports));
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
void UIKit_UISearchDisplayControllerProtocols()
{
	(void)@protocol(UISearchDisplayDelegate);
}
void load_UIKit_UISearchDisplayController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
