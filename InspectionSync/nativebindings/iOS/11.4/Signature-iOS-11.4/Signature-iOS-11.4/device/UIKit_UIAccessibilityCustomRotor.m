#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIAccessibilityCustomRotor (Exports)
-(id) jsinitWithName: (NSString *) name itemSearchBlock: (JSValue *) itemSearchBlock 
{
	UIAccessibilityCustomRotorItemResult *  (^ itemSearchBlock_)(UIAccessibilityCustomRotorSearchPredicate * ) = nil;
	if (!itemSearchBlock.isUndefined) {
		itemSearchBlock_ = ^UIAccessibilityCustomRotorItemResult *(UIAccessibilityCustomRotorSearchPredicate * arg0) {
			JSContext* __jsContext = itemSearchBlock.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			JSValue* result = callJSFunction(__jsContext, itemSearchBlock, self, parameters);
			return [result toObject];
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithName: name itemSearchBlock: itemSearchBlock_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithAttributedName: (NSAttributedString *) attributedName itemSearchBlock: (JSValue *) itemSearchBlock 
{
	UIAccessibilityCustomRotorItemResult *  (^ itemSearchBlock_)(UIAccessibilityCustomRotorSearchPredicate * ) = nil;
	if (!itemSearchBlock.isUndefined) {
		itemSearchBlock_ = ^UIAccessibilityCustomRotorItemResult *(UIAccessibilityCustomRotorSearchPredicate * arg0) {
			JSContext* __jsContext = itemSearchBlock.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			JSValue* result = callJSFunction(__jsContext, itemSearchBlock, self, parameters);
			return [result toObject];
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithAttributedName: attributedName itemSearchBlock: itemSearchBlock_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithSystemType: (UIAccessibilityCustomSystemRotorType) type itemSearchBlock: (JSValue *) itemSearchBlock 
{
	UIAccessibilityCustomRotorItemResult *  (^ itemSearchBlock_)(UIAccessibilityCustomRotorSearchPredicate * ) = nil;
	if (!itemSearchBlock.isUndefined) {
		itemSearchBlock_ = ^UIAccessibilityCustomRotorItemResult *(UIAccessibilityCustomRotorSearchPredicate * arg0) {
			JSContext* __jsContext = itemSearchBlock.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			JSValue* result = callJSFunction(__jsContext, itemSearchBlock, self, parameters);
			return [result toObject];
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithSystemType: type itemSearchBlock: itemSearchBlock_ ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsItemSearchBlock
{
	return [JSValue valueWithObject: self.itemSearchBlock inContext: [JSContext currentContext]];
}
-(void) setJsItemSearchBlock: (JSValue *) value
{
	UIAccessibilityCustomRotorItemResult *  (^ value_)(UIAccessibilityCustomRotorSearchPredicate * ) = nil;
	if (!value.isUndefined) {
		value_ = ^UIAccessibilityCustomRotorItemResult *(UIAccessibilityCustomRotorSearchPredicate * arg0) {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			JSValue* result = callJSFunction(__jsContext, value, self, parameters);
			return [result toObject];
		};
	}
	self.itemSearchBlock = value_;
}
@end
@implementation UIAccessibilityCustomRotorItemResult (Exports)
-(id) jsinitWithTargetElement: (id) targetElement targetRange: (UITextRange *) targetRange 
{
	id resultVal__;
	resultVal__ = [[self initWithTargetElement: targetElement targetRange: targetRange ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIAccessibilityCustomRotor class], @protocol(UIAccessibilityCustomRotorInstanceExports));
	class_addProtocol([UIAccessibilityCustomRotor class], @protocol(UIAccessibilityCustomRotorClassExports));
	class_addProtocol([UIAccessibilityCustomRotorSearchPredicate class], @protocol(UIAccessibilityCustomRotorSearchPredicateInstanceExports));
	class_addProtocol([UIAccessibilityCustomRotorSearchPredicate class], @protocol(UIAccessibilityCustomRotorSearchPredicateClassExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityCustomRotorCategoryInstanceExports));
	class_addProtocol([NSObject class], @protocol(NSObjectUIAccessibilityCustomRotorCategoryClassExports));
	class_addProtocol([UIAccessibilityCustomRotorItemResult class], @protocol(UIAccessibilityCustomRotorItemResultInstanceExports));
	class_addProtocol([UIAccessibilityCustomRotorItemResult class], @protocol(UIAccessibilityCustomRotorItemResultClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIAccessibilityCustomRotorDirectionPrevious"] = @0;
	context[@"UIAccessibilityCustomRotorDirectionNext"] = @1;

	context[@"UIAccessibilityCustomSystemRotorTypeNone"] = @0;
	context[@"UIAccessibilityCustomSystemRotorTypeLink"] = @1;
	context[@"UIAccessibilityCustomSystemRotorTypeVisitedLink"] = @2;
	context[@"UIAccessibilityCustomSystemRotorTypeHeading"] = @3;
	context[@"UIAccessibilityCustomSystemRotorTypeHeadingLevel1"] = @4;
	context[@"UIAccessibilityCustomSystemRotorTypeHeadingLevel2"] = @5;
	context[@"UIAccessibilityCustomSystemRotorTypeHeadingLevel3"] = @6;
	context[@"UIAccessibilityCustomSystemRotorTypeHeadingLevel4"] = @7;
	context[@"UIAccessibilityCustomSystemRotorTypeHeadingLevel5"] = @8;
	context[@"UIAccessibilityCustomSystemRotorTypeHeadingLevel6"] = @9;
	context[@"UIAccessibilityCustomSystemRotorTypeBoldText"] = @10;
	context[@"UIAccessibilityCustomSystemRotorTypeItalicText"] = @11;
	context[@"UIAccessibilityCustomSystemRotorTypeUnderlineText"] = @12;
	context[@"UIAccessibilityCustomSystemRotorTypeMisspelledWord"] = @13;
	context[@"UIAccessibilityCustomSystemRotorTypeImage"] = @14;
	context[@"UIAccessibilityCustomSystemRotorTypeTextField"] = @15;
	context[@"UIAccessibilityCustomSystemRotorTypeTable"] = @16;
	context[@"UIAccessibilityCustomSystemRotorTypeList"] = @17;
	context[@"UIAccessibilityCustomSystemRotorTypeLandmark"] = @18;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIAccessibilityCustomRotor_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
