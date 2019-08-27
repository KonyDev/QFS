#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UITableViewCell (Exports)
-(id) jsinitWithStyle: (UITableViewCellStyle) style reuseIdentifier: (NSString *) reuseIdentifier 
{
	id resultVal__;
	resultVal__ = [[self initWithStyle: style reuseIdentifier: reuseIdentifier ] autorelease];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object ];
	return resultVal__;
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
@implementation UITableViewCell (UITableViewCellUIDeprecatedCategoryExports)
-(id) jsinitWithFrame: (CGRect) frame reuseIdentifier: (NSString *) reuseIdentifier 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame reuseIdentifier: reuseIdentifier ] autorelease];
	return resultVal__;
}
-(NSString *) getJsEditAction
{
	return NSStringFromSelector(self.editAction);
}
-(void) setJsEditAction: (NSString *) value
{
	self.editAction = NSSelectorFromString(value);
}
-(NSString *) getJsAccessoryAction
{
	return NSStringFromSelector(self.accessoryAction);
}
-(void) setJsAccessoryAction: (NSString *) value
{
	self.accessoryAction = NSSelectorFromString(value);
}
@end
static void addProtocols()
{
	class_addProtocol([UITableViewCell class], @protocol(UITableViewCellInstanceExports));
	class_addProtocol([UITableViewCell class], @protocol(UITableViewCellClassExports));
	class_addProtocol([UITableViewCell class], @protocol(UITableViewCellUIDeprecatedCategoryInstanceExports));
	class_addProtocol([UITableViewCell class], @protocol(UITableViewCellUIDeprecatedCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UITableViewCellStyleDefault"] = @0;
	context[@"UITableViewCellStyleValue1"] = @1;
	context[@"UITableViewCellStyleValue2"] = @2;
	context[@"UITableViewCellStyleSubtitle"] = @3;

	context[@"UITableViewCellSeparatorStyleNone"] = @0;
	context[@"UITableViewCellSeparatorStyleSingleLine"] = @1;
	context[@"UITableViewCellSeparatorStyleSingleLineEtched"] = @2;

	context[@"UITableViewCellSelectionStyleNone"] = @0;
	context[@"UITableViewCellSelectionStyleBlue"] = @1;
	context[@"UITableViewCellSelectionStyleGray"] = @2;
	context[@"UITableViewCellSelectionStyleDefault"] = @3;

	context[@"UITableViewCellFocusStyleDefault"] = @0;
	context[@"UITableViewCellFocusStyleCustom"] = @1;

	context[@"UITableViewCellEditingStyleNone"] = @0;
	context[@"UITableViewCellEditingStyleDelete"] = @1;
	context[@"UITableViewCellEditingStyleInsert"] = @2;

	context[@"UITableViewCellAccessoryNone"] = @0;
	context[@"UITableViewCellAccessoryDisclosureIndicator"] = @1;
	context[@"UITableViewCellAccessoryDetailDisclosureButton"] = @2;
	context[@"UITableViewCellAccessoryCheckmark"] = @3;
	context[@"UITableViewCellAccessoryDetailButton"] = @4;

	context[@"UITableViewCellStateDefaultMask"] = @0U;
	context[@"UITableViewCellStateShowingEditControlMask"] = @1U;
	context[@"UITableViewCellStateShowingDeleteConfirmationMask"] = @2U;

	context[@"UITableViewCellDragStateNone"] = @0;
	context[@"UITableViewCellDragStateLifting"] = @1;
	context[@"UITableViewCellDragStateDragging"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UITableViewCell_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
