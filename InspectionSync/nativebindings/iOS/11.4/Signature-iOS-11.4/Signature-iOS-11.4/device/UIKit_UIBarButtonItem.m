#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIBarButtonItem (UIBarButtonItemSpringLoadingCategoryExports)
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
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
@implementation UIBarButtonItem (Exports)
-(id) jsinitWithCustomView: (UIView *) customView 
{
	id resultVal__;
	resultVal__ = [[self initWithCustomView: customView ] autorelease];
	return resultVal__;
}
-(id) jsinitWithBarButtonSystemItem: (UIBarButtonSystemItem) systemItem target: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	id resultVal__;
	resultVal__ = [[self initWithBarButtonSystemItem: systemItem target: target action: action_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithImage: (UIImage *) image landscapeImagePhone: (UIImage *) landscapeImagePhone style: (UIBarButtonItemStyle) style target: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	id resultVal__;
	resultVal__ = [[self initWithImage: image landscapeImagePhone: landscapeImagePhone style: style target: target action: action_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithImage: (UIImage *) image style: (UIBarButtonItemStyle) style target: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	id resultVal__;
	resultVal__ = [[self initWithImage: image style: style target: target action: action_ ] autorelease];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(id) jsinitWithTitle: (NSString *) title style: (UIBarButtonItemStyle) style target: (id) target action: (NSString *) action 
{
	SEL action_ = NSSelectorFromString(action);
	id resultVal__;
	resultVal__ = [[self initWithTitle: title style: style target: target action: action_ ] autorelease];
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
	class_addProtocol([UIBarButtonItem class], @protocol(UIBarButtonItemSpringLoadingCategoryInstanceExports));
	class_addProtocol([UIBarButtonItem class], @protocol(UIBarButtonItemSpringLoadingCategoryClassExports));
	class_addProtocol([UIBarButtonItem class], @protocol(UIBarButtonItemInstanceExports));
	class_addProtocol([UIBarButtonItem class], @protocol(UIBarButtonItemClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIBarButtonItemStylePlain"] = @0;
	context[@"UIBarButtonItemStyleBordered"] = @1;
	context[@"UIBarButtonItemStyleDone"] = @2;

	context[@"UIBarButtonSystemItemDone"] = @0;
	context[@"UIBarButtonSystemItemCancel"] = @1;
	context[@"UIBarButtonSystemItemEdit"] = @2;
	context[@"UIBarButtonSystemItemSave"] = @3;
	context[@"UIBarButtonSystemItemAdd"] = @4;
	context[@"UIBarButtonSystemItemFlexibleSpace"] = @5;
	context[@"UIBarButtonSystemItemFixedSpace"] = @6;
	context[@"UIBarButtonSystemItemCompose"] = @7;
	context[@"UIBarButtonSystemItemReply"] = @8;
	context[@"UIBarButtonSystemItemAction"] = @9;
	context[@"UIBarButtonSystemItemOrganize"] = @10;
	context[@"UIBarButtonSystemItemBookmarks"] = @11;
	context[@"UIBarButtonSystemItemSearch"] = @12;
	context[@"UIBarButtonSystemItemRefresh"] = @13;
	context[@"UIBarButtonSystemItemStop"] = @14;
	context[@"UIBarButtonSystemItemCamera"] = @15;
	context[@"UIBarButtonSystemItemTrash"] = @16;
	context[@"UIBarButtonSystemItemPlay"] = @17;
	context[@"UIBarButtonSystemItemPause"] = @18;
	context[@"UIBarButtonSystemItemRewind"] = @19;
	context[@"UIBarButtonSystemItemFastForward"] = @20;
	context[@"UIBarButtonSystemItemUndo"] = @21;
	context[@"UIBarButtonSystemItemRedo"] = @22;
	context[@"UIBarButtonSystemItemPageCurl"] = @23;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIBarButtonItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
