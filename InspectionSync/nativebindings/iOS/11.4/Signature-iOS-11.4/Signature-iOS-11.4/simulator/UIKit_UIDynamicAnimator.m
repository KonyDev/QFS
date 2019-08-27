#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDynamicAnimator (UIDynamicAnimatorUICollectionViewAdditionsCategoryExports)
-(id) jsinitWithCollectionViewLayout: (UICollectionViewLayout *) layout 
{
	id resultVal__;
	resultVal__ = [[self initWithCollectionViewLayout: layout ] autorelease];
	return resultVal__;
}
@end
@implementation UIDynamicAnimator (Exports)
-(id) jsinitWithReferenceView: (UIView *) view 
{
	id resultVal__;
	resultVal__ = [[self initWithReferenceView: view ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDynamicAnimator class], @protocol(UIDynamicAnimatorUICollectionViewAdditionsCategoryInstanceExports));
	class_addProtocol([UIDynamicAnimator class], @protocol(UIDynamicAnimatorUICollectionViewAdditionsCategoryClassExports));
	class_addProtocol([UIDynamicAnimator class], @protocol(UIDynamicAnimatorInstanceExports));
	class_addProtocol([UIDynamicAnimator class], @protocol(UIDynamicAnimatorClassExports));
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
void UIKit_UIDynamicAnimatorProtocols()
{
	(void)@protocol(UIDynamicAnimatorDelegate);
}
void load_UIKit_UIDynamicAnimator_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
