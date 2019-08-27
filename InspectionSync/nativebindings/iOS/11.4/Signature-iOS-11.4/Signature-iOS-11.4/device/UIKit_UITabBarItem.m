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
	context[@"UITabBarSystemItemMore"] = @0;
	context[@"UITabBarSystemItemFavorites"] = @1;
	context[@"UITabBarSystemItemFeatured"] = @2;
	context[@"UITabBarSystemItemTopRated"] = @3;
	context[@"UITabBarSystemItemRecents"] = @4;
	context[@"UITabBarSystemItemContacts"] = @5;
	context[@"UITabBarSystemItemHistory"] = @6;
	context[@"UITabBarSystemItemBookmarks"] = @7;
	context[@"UITabBarSystemItemSearch"] = @8;
	context[@"UITabBarSystemItemDownloads"] = @9;
	context[@"UITabBarSystemItemMostRecent"] = @10;
	context[@"UITabBarSystemItemMostViewed"] = @11;

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
