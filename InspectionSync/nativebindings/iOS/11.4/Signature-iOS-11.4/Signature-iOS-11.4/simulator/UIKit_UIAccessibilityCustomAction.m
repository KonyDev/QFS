#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIAccessibilityCustomAction (Exports)
-(id) jsinitWithAttributedName: (NSAttributedString *) attributedName target: (id) target selector: (NSString *) selector 
{
	SEL selector_ = NSSelectorFromString(selector);
	id resultVal__;
	resultVal__ = [[self initWithAttributedName: attributedName target: target selector: selector_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithName: (NSString *) name target: (id) target selector: (NSString *) selector 
{
	SEL selector_ = NSSelectorFromString(selector);
	id resultVal__;
	resultVal__ = [[self initWithName: name target: target selector: selector_ ] autorelease];
	return resultVal__;
}
-(NSString *) getJsSelector
{
	return NSStringFromSelector(self.selector);
}
-(void) setJsSelector: (NSString *) value
{
	self.selector = NSSelectorFromString(value);
}
@end
static void addProtocols()
{
	class_addProtocol([UIAccessibilityCustomAction class], @protocol(UIAccessibilityCustomActionInstanceExports));
	class_addProtocol([UIAccessibilityCustomAction class], @protocol(UIAccessibilityCustomActionClassExports));
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
void load_UIKit_UIAccessibilityCustomAction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
