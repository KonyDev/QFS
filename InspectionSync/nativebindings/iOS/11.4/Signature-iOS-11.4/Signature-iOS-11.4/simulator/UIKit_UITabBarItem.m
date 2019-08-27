#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UITabBarItem (UITabBarItemSpringLoadingCategoryExports)
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
@implementation UITabBarItem (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(id) jsinitWithTitle: (NSString *) title image: (UIImage *) image tag: (NSInteger) tag 
{
	id resultVal__;
	resultVal__ = [[self initWithTitle: title image: image tag: tag ] autorelease];
	return resultVal__;
}
-(id) jsinitWithTabBarSystemItem: (UITabBarSystemItem) systemItem tag: (NSInteger) tag 
{
	id resultVal__;
	resultVal__ = [[self initWithTabBarSystemItem: systemItem tag: tag ] autorelease];
	return resultVal__;
}
-(id) jsinitWithTitle: (NSString *) title image: (UIImage *) image selectedImage: (UIImage *) selectedImage 
{
	id resultVal__;
	resultVal__ = [[self initWithTitle: title image: image selectedImage: selectedImage ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UITabBarItem class], @protocol(UITabBarItemSpringLoadingCategoryInstanceExports));
	class_addProtocol([UITabBarItem class], @protocol(UITabBarItemSpringLoadingCategoryClassExports));
	class_addProtocol([UITabBarItem class], @protocol(UITabBarItemInstanceExports));
	class_addProtocol([UITabBarItem class], @protocol(UITabBarItemClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UITabBarSystemItemMore"] = @0L;
	context[@"UITabBarSystemItemFavorites"] = @1L;
	context[@"UITabBarSystemItemFeatured"] = @2L;
	context[@"UITabBarSystemItemTopRated"] = @3L;
	context[@"UITabBarSystemItemRecents"] = @4L;
	context[@"UITabBarSystemItemContacts"] = @5L;
	context[@"UITabBarSystemItemHistory"] = @6L;
	context[@"UITabBarSystemItemBookmarks"] = @7L;
	context[@"UITabBarSystemItemSearch"] = @8L;
	context[@"UITabBarSystemItemDownloads"] = @9L;
	context[@"UITabBarSystemItemMostRecent"] = @10L;
	context[@"UITabBarSystemItemMostViewed"] = @11L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UITabBarItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
