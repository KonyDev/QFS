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
	context[@"UIBarButtonItemStylePlain"] = @0L;
	context[@"UIBarButtonItemStyleBordered"] = @1L;
	context[@"UIBarButtonItemStyleDone"] = @2L;

	context[@"UIBarButtonSystemItemDone"] = @0L;
	context[@"UIBarButtonSystemItemCancel"] = @1L;
	context[@"UIBarButtonSystemItemEdit"] = @2L;
	context[@"UIBarButtonSystemItemSave"] = @3L;
	context[@"UIBarButtonSystemItemAdd"] = @4L;
	context[@"UIBarButtonSystemItemFlexibleSpace"] = @5L;
	context[@"UIBarButtonSystemItemFixedSpace"] = @6L;
	context[@"UIBarButtonSystemItemCompose"] = @7L;
	context[@"UIBarButtonSystemItemReply"] = @8L;
	context[@"UIBarButtonSystemItemAction"] = @9L;
	context[@"UIBarButtonSystemItemOrganize"] = @10L;
	context[@"UIBarButtonSystemItemBookmarks"] = @11L;
	context[@"UIBarButtonSystemItemSearch"] = @12L;
	context[@"UIBarButtonSystemItemRefresh"] = @13L;
	context[@"UIBarButtonSystemItemStop"] = @14L;
	context[@"UIBarButtonSystemItemCamera"] = @15L;
	context[@"UIBarButtonSystemItemTrash"] = @16L;
	context[@"UIBarButtonSystemItemPlay"] = @17L;
	context[@"UIBarButtonSystemItemPause"] = @18L;
	context[@"UIBarButtonSystemItemRewind"] = @19L;
	context[@"UIBarButtonSystemItemFastForward"] = @20L;
	context[@"UIBarButtonSystemItemUndo"] = @21L;
	context[@"UIBarButtonSystemItemRedo"] = @22L;
	context[@"UIBarButtonSystemItemPageCurl"] = @23L;

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
