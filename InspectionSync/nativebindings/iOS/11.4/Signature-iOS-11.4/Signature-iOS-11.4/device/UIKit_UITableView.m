#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UITableViewRowAction (Exports)
+(id) jsrowActionWithStyle: (UITableViewRowActionStyle) style title: (NSString *) title handler: (JSValue *) handler 
{
	void (^ handler_)(UITableViewRowAction * , NSIndexPath * ) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void(UITableViewRowAction * arg0, NSIndexPath * arg1) {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [self rowActionWithStyle: style title: title handler: handler_ ];
	return resultVal__;
}
@end
@implementation UITableViewDropPlaceholder (Exports)
-(JSValue *) getJsPreviewParametersProvider
{
	return [JSValue valueWithObject: self.previewParametersProvider inContext: [JSContext currentContext]];
}
-(void) setJsPreviewParametersProvider: (JSValue *) value
{
	UIDragPreviewParameters *  (^ value_)(__kindof UITableViewCell * ) = nil;
	if (!value.isUndefined) {
		value_ = ^UIDragPreviewParameters *(__kindof UITableViewCell * arg0) {
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
@implementation UITableViewDropProposal (Exports)
-(id) jsinitWithDropOperation: (UIDropOperation) operation intent: (UITableViewDropIntent) intent 
{
	id resultVal__;
	resultVal__ = [[self initWithDropOperation: operation intent: intent ] autorelease];
	return resultVal__;
}
@end
@implementation UITableView (UITableViewUIDragAndDropCategoryExports)
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
@implementation UITableViewPlaceholder (Exports)
-(id) jsinitWithInsertionIndexPath: (NSIndexPath *) insertionIndexPath reuseIdentifier: (NSString *) reuseIdentifier rowHeight: (CGFloat) rowHeight 
{
	id resultVal__;
	resultVal__ = [[self initWithInsertionIndexPath: insertionIndexPath reuseIdentifier: reuseIdentifier rowHeight: rowHeight ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsCellUpdateHandler
{
	return [JSValue valueWithObject: self.cellUpdateHandler inContext: [JSContext currentContext]];
}
-(void) setJsCellUpdateHandler: (JSValue *) value
{
	void (^ value_)(__kindof UITableViewCell * ) = nil;
	if (!value.isUndefined) {
		value_ = ^void(__kindof UITableViewCell * arg0) {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, value, self, parameters);
		};
	}
	self.cellUpdateHandler = value_;
}
@end
@implementation UITableView (Exports)
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
-(id) jsinitWithFrame: (CGRect) frame style: (UITableViewStyle) style 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame style: style ] autorelease];
	return resultVal__;
}
-(void) jsregisterClass: (JSValue *) aClass forHeaderFooterViewReuseIdentifier: (NSString *) identifier 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	[self registerClass: aClass_ forHeaderFooterViewReuseIdentifier: identifier ];
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(void) jsregisterClass: (JSValue *) cellClass forCellReuseIdentifier: (NSString *) identifier 
{
	Class cellClass_ = objc_getClass([[cellClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	[self registerClass: cellClass_ forCellReuseIdentifier: identifier ];
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
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UITableViewFocusUpdateContext class], @protocol(UITableViewFocusUpdateContextInstanceExports));
	class_addProtocol([UITableViewFocusUpdateContext class], @protocol(UITableViewFocusUpdateContextClassExports));
	class_addProtocol([UITableViewRowAction class], @protocol(UITableViewRowActionInstanceExports));
	class_addProtocol([UITableViewRowAction class], @protocol(UITableViewRowActionClassExports));
	class_addProtocol([UITableViewDropPlaceholder class], @protocol(UITableViewDropPlaceholderInstanceExports));
	class_addProtocol([UITableViewDropPlaceholder class], @protocol(UITableViewDropPlaceholderClassExports));
	class_addProtocol([UITableViewDropProposal class], @protocol(UITableViewDropProposalInstanceExports));
	class_addProtocol([UITableViewDropProposal class], @protocol(UITableViewDropProposalClassExports));
	class_addProtocol([UITableView class], @protocol(UITableViewUIDragAndDropCategoryInstanceExports));
	class_addProtocol([UITableView class], @protocol(UITableViewUIDragAndDropCategoryClassExports));
	class_addProtocol([UITableViewPlaceholder class], @protocol(UITableViewPlaceholderInstanceExports));
	class_addProtocol([UITableViewPlaceholder class], @protocol(UITableViewPlaceholderClassExports));
	class_addProtocol([UITableView class], @protocol(UITableViewInstanceExports));
	class_addProtocol([UITableView class], @protocol(UITableViewClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UITableViewStylePlain"] = @0;
	context[@"UITableViewStyleGrouped"] = @1;

	context[@"UITableViewScrollPositionNone"] = @0;
	context[@"UITableViewScrollPositionTop"] = @1;
	context[@"UITableViewScrollPositionMiddle"] = @2;
	context[@"UITableViewScrollPositionBottom"] = @3;

	context[@"UITableViewRowAnimationFade"] = @0;
	context[@"UITableViewRowAnimationRight"] = @1;
	context[@"UITableViewRowAnimationLeft"] = @2;
	context[@"UITableViewRowAnimationTop"] = @3;
	context[@"UITableViewRowAnimationBottom"] = @4;
	context[@"UITableViewRowAnimationNone"] = @5;
	context[@"UITableViewRowAnimationMiddle"] = @6;
	context[@"UITableViewRowAnimationAutomatic"] = @100;

	context[@"UITableViewRowActionStyleDefault"] = @0;
	context[@"UITableViewRowActionStyleDestructive"] = @0;
	context[@"UITableViewRowActionStyleNormal"] = @1;

	context[@"UITableViewSeparatorInsetFromCellEdges"] = @0;
	context[@"UITableViewSeparatorInsetFromAutomaticInsets"] = @1;

	context[@"UITableViewDropIntentUnspecified"] = @0;
	context[@"UITableViewDropIntentInsertAtDestinationIndexPath"] = @1;
	context[@"UITableViewDropIntentInsertIntoDestinationIndexPath"] = @2;
	context[@"UITableViewDropIntentAutomatic"] = @3;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UITableViewSelectionDidChangeNotification;
	if (p != NULL) context[@"UITableViewSelectionDidChangeNotification"] = UITableViewSelectionDidChangeNotification;
	p = (void*) &UITableViewAutomaticDimension;
	if (p != NULL) context[@"UITableViewAutomaticDimension"] = @(UITableViewAutomaticDimension);
	p = (void*) &UITableViewIndexSearch;
	if (p != NULL) context[@"UITableViewIndexSearch"] = UITableViewIndexSearch;
}
void UIKit_UITableViewProtocols()
{
	(void)@protocol(UITableViewDataSourcePrefetching);
	(void)@protocol(UITableViewDelegate);
	(void)@protocol(UITableViewDropPlaceholderContext);
	(void)@protocol(UITableViewDropCoordinator);
	(void)@protocol(UITableViewDataSource);
	(void)@protocol(UITableViewDragDelegate);
	(void)@protocol(UITableViewDropDelegate);
	(void)@protocol(UITableViewDropItem);
}
void load_UIKit_UITableView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
