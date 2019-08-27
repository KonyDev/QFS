#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UICollectionViewLayout (UICollectionViewLayoutUIUpdateSupportHooksCategoryExports)
-(UICollectionViewLayoutAttributes *) jsinitialLayoutAttributesForAppearingSupplementaryElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) elementIndexPath 
{
	UICollectionViewLayoutAttributes * resultVal__;
	resultVal__ = [self initialLayoutAttributesForAppearingSupplementaryElementOfKind: elementKind atIndexPath: elementIndexPath ];
	return resultVal__;
}
-(UICollectionViewLayoutAttributes *) jsinitialLayoutAttributesForAppearingDecorationElementOfKind: (NSString *) elementKind atIndexPath: (NSIndexPath *) decorationIndexPath 
{
	UICollectionViewLayoutAttributes * resultVal__;
	resultVal__ = [self initialLayoutAttributesForAppearingDecorationElementOfKind: elementKind atIndexPath: decorationIndexPath ];
	return resultVal__;
}
-(UICollectionViewLayoutAttributes *) jsinitialLayoutAttributesForAppearingItemAtIndexPath: (NSIndexPath *) itemIndexPath 
{
	UICollectionViewLayoutAttributes * resultVal__;
	resultVal__ = [self initialLayoutAttributesForAppearingItemAtIndexPath: itemIndexPath ];
	return resultVal__;
}
@end
@implementation UICollectionViewLayout (Exports)
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(void) jsregisterClass: (JSValue *) viewClass forDecorationViewOfKind: (NSString *) elementKind 
{
	Class viewClass_ = objc_getClass([[viewClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	[self registerClass: viewClass_ forDecorationViewOfKind: elementKind ];
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
@implementation UICollectionViewLayoutAttributes (Exports)
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
static void addProtocols()
{
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutUIUpdateSupportHooksCategoryInstanceExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutUIUpdateSupportHooksCategoryClassExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutInstanceExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutClassExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutUIReorderingSupportHooksCategoryInstanceExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutUIReorderingSupportHooksCategoryClassExports));
	class_addProtocol([UICollectionViewLayoutAttributes class], @protocol(UICollectionViewLayoutAttributesInstanceExports));
	class_addProtocol([UICollectionViewLayoutAttributes class], @protocol(UICollectionViewLayoutAttributesClassExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutUISubclassingHooksCategoryInstanceExports));
	class_addProtocol([UICollectionViewLayout class], @protocol(UICollectionViewLayoutUISubclassingHooksCategoryClassExports));
	class_addProtocol([UICollectionViewLayoutInvalidationContext class], @protocol(UICollectionViewLayoutInvalidationContextInstanceExports));
	class_addProtocol([UICollectionViewLayoutInvalidationContext class], @protocol(UICollectionViewLayoutInvalidationContextClassExports));
	class_addProtocol([UICollectionViewUpdateItem class], @protocol(UICollectionViewUpdateItemInstanceExports));
	class_addProtocol([UICollectionViewUpdateItem class], @protocol(UICollectionViewUpdateItemClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UICollectionElementCategoryCell"] = @0UL;
	context[@"UICollectionElementCategorySupplementaryView"] = @1UL;
	context[@"UICollectionElementCategoryDecorationView"] = @2UL;

	context[@"UICollectionUpdateActionInsert"] = @0L;
	context[@"UICollectionUpdateActionDelete"] = @1L;
	context[@"UICollectionUpdateActionReload"] = @2L;
	context[@"UICollectionUpdateActionMove"] = @3L;
	context[@"UICollectionUpdateActionNone"] = @4L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UICollectionViewLayout_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
