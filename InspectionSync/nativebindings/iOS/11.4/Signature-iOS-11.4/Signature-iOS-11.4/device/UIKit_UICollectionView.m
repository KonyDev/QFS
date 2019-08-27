#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UICollectionViewDropPlaceholder (Exports)
-(JSValue *) getJsPreviewParametersProvider
{
	return [JSValue valueWithObject: self.previewParametersProvider inContext: [JSContext currentContext]];
}
-(void) setJsPreviewParametersProvider: (JSValue *) value
{
	UIDragPreviewParameters *  (^ value_)(__kindof UICollectionViewCell * ) = nil;
	if (!value.isUndefined) {
		value_ = ^UIDragPreviewParameters *(__kindof UICollectionViewCell * arg0) {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			JSValue* result = callJSFunction(__jsContext, value, self, parameters);
			return [result toObject];
		};
	}
	self.previewParametersProvider = value_;
}
@end
@implementation UICollectionViewDropProposal (Exports)
-(id) jsinitWithDropOperation: (UIDropOperation) operation intent: (UICollectionViewDropIntent) intent 
{
	id resultVal__;
	resultVal__ = [[self initWithDropOperation: operation intent: intent ] autorelease];
	return resultVal__;
}
@end
@implementation UICollectionView (UICollectionViewUIDragAndDropCategoryExports)
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
@implementation UICollectionView (Exports)
-(void) jsperformBatchUpdates: (JSValue *) updates completion: (JSValue *) completion 
{
	void (^ updates_)(void) = nil;
	if (!updates.isUndefined) {
		updates_ = ^void() {
			JSContext* __jsContext = updates.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, updates, self, parameters);
		};
	}
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self performBatchUpdates: updates_ completion: completion_ ];
}
-(void) jssetCollectionViewLayout: (UICollectionViewLayout *) layout animated: (BOOL) animated completion: (JSValue *) completion 
{
	void (^ completion_)(BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	[self setCollectionViewLayout: layout animated: animated completion: completion_ ];
}
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
-(void) jsregisterClass: (JSValue *) cellClass forCellWithReuseIdentifier: (NSString *) identifier 
{
	Class cellClass_ = objc_getClass([[cellClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	[self registerClass: cellClass_ forCellWithReuseIdentifier: identifier ];
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(void) jsregisterClass: (JSValue *) viewClass forSupplementaryViewOfKind: (NSString *) elementKind withReuseIdentifier: (NSString *) identifier 
{
	Class viewClass_ = objc_getClass([[viewClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	[self registerClass: viewClass_ forSupplementaryViewOfKind: elementKind withReuseIdentifier: identifier ];
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(UICollectionViewTransitionLayout *) jsstartInteractiveTransitionToCollectionViewLayout: (UICollectionViewLayout *) layout completion: (JSValue *) completion 
{
	void (^ completion_)(BOOL, BOOL) = nil;
	if (!completion.isUndefined) {
		completion_ = ^void(BOOL arg0, BOOL arg1) {
			JSContext* __jsContext = completion.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			callJSFunction(__jsContext, completion, self, parameters);
		};
	}
	UICollectionViewTransitionLayout * resultVal__;
	resultVal__ = [self startInteractiveTransitionToCollectionViewLayout: layout completion: completion_ ];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(void) jsperformUsingPresentationValues: (JSValue *) actionsToTranslate 
{
	void (^ actionsToTranslate_)(void) = nil;
	if (!actionsToTranslate.isUndefined) {
		actionsToTranslate_ = ^void() {
			JSContext* __jsContext = actionsToTranslate.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, actionsToTranslate, self, parameters);
		};
	}
	[self performUsingPresentationValues: actionsToTranslate_ ];
}
-(id) jsinitWithFrame: (CGRect) frame collectionViewLayout: (UICollectionViewLayout *) layout 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame collectionViewLayout: layout ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
@implementation UICollectionViewPlaceholder (Exports)
-(id) jsinitWithInsertionIndexPath: (NSIndexPath *) insertionIndexPath reuseIdentifier: (NSString *) reuseIdentifier 
{
	id resultVal__;
	resultVal__ = [[self initWithInsertionIndexPath: insertionIndexPath reuseIdentifier: reuseIdentifier ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsCellUpdateHandler
{
	return [JSValue valueWithObject: self.cellUpdateHandler inContext: [JSContext currentContext]];
}
-(void) setJsCellUpdateHandler: (JSValue *) value
{
	void (^ value_)(__kindof UICollectionViewCell * ) = nil;
	if (!value.isUndefined) {
		value_ = ^void(__kindof UICollectionViewCell * arg0) {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, value, self, parameters);
		};
	}
	self.cellUpdateHandler = value_;
}
@end
static void addProtocols()
{
	class_addProtocol([UICollectionViewDropPlaceholder class], @protocol(UICollectionViewDropPlaceholderInstanceExports));
	class_addProtocol([UICollectionViewDropPlaceholder class], @protocol(UICollectionViewDropPlaceholderClassExports));
	class_addProtocol([UICollectionViewFocusUpdateContext class], @protocol(UICollectionViewFocusUpdateContextInstanceExports));
	class_addProtocol([UICollectionViewFocusUpdateContext class], @protocol(UICollectionViewFocusUpdateContextClassExports));
	class_addProtocol([UICollectionViewDropProposal class], @protocol(UICollectionViewDropProposalInstanceExports));
	class_addProtocol([UICollectionViewDropProposal class], @protocol(UICollectionViewDropProposalClassExports));
	class_addProtocol([UICollectionView class], @protocol(UICollectionViewUIDragAndDropCategoryInstanceExports));
	class_addProtocol([UICollectionView class], @protocol(UICollectionViewUIDragAndDropCategoryClassExports));
	class_addProtocol([UICollectionView class], @protocol(UICollectionViewInstanceExports));
	class_addProtocol([UICollectionView class], @protocol(UICollectionViewClassExports));
	class_addProtocol([UICollectionViewPlaceholder class], @protocol(UICollectionViewPlaceholderInstanceExports));
	class_addProtocol([UICollectionViewPlaceholder class], @protocol(UICollectionViewPlaceholderClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UICollectionViewScrollPositionNone"] = @0U;
	context[@"UICollectionViewScrollPositionTop"] = @1U;
	context[@"UICollectionViewScrollPositionCenteredVertically"] = @2U;
	context[@"UICollectionViewScrollPositionBottom"] = @4U;
	context[@"UICollectionViewScrollPositionLeft"] = @8U;
	context[@"UICollectionViewScrollPositionCenteredHorizontally"] = @16U;
	context[@"UICollectionViewScrollPositionRight"] = @32U;

	context[@"UICollectionViewReorderingCadenceImmediate"] = @0;
	context[@"UICollectionViewReorderingCadenceFast"] = @1;
	context[@"UICollectionViewReorderingCadenceSlow"] = @2;

	context[@"UICollectionViewDropIntentUnspecified"] = @0;
	context[@"UICollectionViewDropIntentInsertAtDestinationIndexPath"] = @1;
	context[@"UICollectionViewDropIntentInsertIntoDestinationIndexPath"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UICollectionViewProtocols()
{
	(void)@protocol(UICollectionViewDropCoordinator);
	(void)@protocol(UICollectionViewDataSourcePrefetching);
	(void)@protocol(UICollectionViewDelegate);
	(void)@protocol(UICollectionViewDropDelegate);
	(void)@protocol(UICollectionViewDropItem);
	(void)@protocol(UICollectionViewDropPlaceholderContext);
	(void)@protocol(UICollectionViewDataSource);
	(void)@protocol(UICollectionViewDragDelegate);
}
void load_UIKit_UICollectionView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
