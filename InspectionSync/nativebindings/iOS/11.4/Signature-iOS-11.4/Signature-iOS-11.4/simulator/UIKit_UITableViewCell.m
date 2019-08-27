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
	context[@"UITableViewCellStyleDefault"] = @0L;
	context[@"UITableViewCellStyleValue1"] = @1L;
	context[@"UITableViewCellStyleValue2"] = @2L;
	context[@"UITableViewCellStyleSubtitle"] = @3L;

	context[@"UITableViewCellSeparatorStyleNone"] = @0L;
	context[@"UITableViewCellSeparatorStyleSingleLine"] = @1L;
	context[@"UITableViewCellSeparatorStyleSingleLineEtched"] = @2L;

	context[@"UITableViewCellSelectionStyleNone"] = @0L;
	context[@"UITableViewCellSelectionStyleBlue"] = @1L;
	context[@"UITableViewCellSelectionStyleGray"] = @2L;
	context[@"UITableViewCellSelectionStyleDefault"] = @3L;

	context[@"UITableViewCellFocusStyleDefault"] = @0L;
	context[@"UITableViewCellFocusStyleCustom"] = @1L;

	context[@"UITableViewCellEditingStyleNone"] = @0L;
	context[@"UITableViewCellEditingStyleDelete"] = @1L;
	context[@"UITableViewCellEditingStyleInsert"] = @2L;

	context[@"UITableViewCellAccessoryNone"] = @0L;
	context[@"UITableViewCellAccessoryDisclosureIndicator"] = @1L;
	context[@"UITableViewCellAccessoryDetailDisclosureButton"] = @2L;
	context[@"UITableViewCellAccessoryCheckmark"] = @3L;
	context[@"UITableViewCellAccessoryDetailButton"] = @4L;

	context[@"UITableViewCellStateDefaultMask"] = @0UL;
	context[@"UITableViewCellStateShowingEditControlMask"] = @1UL;
	context[@"UITableViewCellStateShowingDeleteConfirmationMask"] = @2UL;

	context[@"UITableViewCellDragStateNone"] = @0L;
	context[@"UITableViewCellDragStateLifting"] = @1L;
	context[@"UITableViewCellDragStateDragging"] = @2L;

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
