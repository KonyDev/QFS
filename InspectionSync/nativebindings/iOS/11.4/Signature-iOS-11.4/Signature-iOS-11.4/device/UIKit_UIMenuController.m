#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIMenuItem (Exports)
-(id) jsinitWithTitle: (NSString *) title action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	id resultVal__;
	resultVal__ = [[self initWithTitle: title action: action_ ] autorelease];
	return resultVal__;
}
-(NSString *) getJsAction
{
	return NSStringFromSelector(self.action);
}
-(void) setJsAction: (NSString *) value
{
	self.action = NSSelectorFromString(value);
}
@end
static void addProtocols()
{
	class_addProtocol([UIMenuController class], @protocol(UIMenuControllerInstanceExports));
	class_addProtocol([UIMenuController class], @protocol(UIMenuControllerClassExports));
	class_addProtocol([UIMenuItem class], @protocol(UIMenuItemInstanceExports));
	class_addProtocol([UIMenuItem class], @protocol(UIMenuItemClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIMenuControllerArrowDefault"] = @0;
	context[@"UIMenuControllerArrowUp"] = @1;
	context[@"UIMenuControllerArrowDown"] = @2;
	context[@"UIMenuControllerArrowLeft"] = @3;
	context[@"UIMenuControllerArrowRight"] = @4;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIMenuControllerMenuFrameDidChangeNotification;
	if (p != NULL) context[@"UIMenuControllerMenuFrameDidChangeNotification"] = UIMenuControllerMenuFrameDidChangeNotification;
	p = (void*) &UIMenuControllerWillShowMenuNotification;
	if (p != NULL) context[@"UIMenuControllerWillShowMenuNotification"] = UIMenuControllerWillShowMenuNotification;
	p = (void*) &UIMenuControllerDidShowMenuNotification;
	if (p != NULL) context[@"UIMenuControllerDidShowMenuNotification"] = UIMenuControllerDidShowMenuNotification;
	p = (void*) &UIMenuControllerDidHideMenuNotification;
	if (p != NULL) context[@"UIMenuControllerDidHideMenuNotification"] = UIMenuControllerDidHideMenuNotification;
	p = (void*) &UIMenuControllerWillHideMenuNotification;
	if (p != NULL) context[@"UIMenuControllerWillHideMenuNotification"] = UIMenuControllerWillHideMenuNotification;
}
void load_UIKit_UIMenuController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
