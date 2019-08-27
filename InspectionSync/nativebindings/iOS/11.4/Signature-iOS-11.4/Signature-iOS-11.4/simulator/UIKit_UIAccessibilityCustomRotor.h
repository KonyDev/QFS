#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccessibilityCustomRotor_symbols(JSContext*);
@protocol UIAccessibilityCustomRotorInstanceExports<JSExport>
@property (readonly,nonatomic) UIAccessibilityCustomSystemRotorType systemRotorType;
@property (copy,nonatomic) NSAttributedString * attributedName;
@property (copy,nonatomic) NSString * name;
@property (getter=getJsItemSearchBlock,setter=setJsItemSearchBlock:) JSValue* jsitemSearchBlock;
JSExportAs(initWithAttributedNameItemSearchBlock,
-(id) jsinitWithAttributedName: (NSAttributedString *) attributedName itemSearchBlock: (JSValue *) itemSearchBlock );
JSExportAs(initWithNameItemSearchBlock,
-(id) jsinitWithName: (NSString *) name itemSearchBlock: (JSValue *) itemSearchBlock );
JSExportAs(initWithSystemTypeItemSearchBlock,
-(id) jsinitWithSystemType: (UIAccessibilityCustomSystemRotorType) type itemSearchBlock: (JSValue *) itemSearchBlock );
@end
@protocol UIAccessibilityCustomRotorClassExports<JSExport>
@end
@protocol UIAccessibilityCustomRotorSearchPredicateInstanceExports<JSExport>
@property (nonatomic) UIAccessibilityCustomRotorDirection searchDirection;
@property (retain,nonatomic) UIAccessibilityCustomRotorItemResult * currentItem;
@end
@protocol UIAccessibilityCustomRotorSearchPredicateClassExports<JSExport>
@end
@protocol NSObjectUIAccessibilityCustomRotorCategoryInstanceExports<JSExport>
@property (retain,nonatomic) NSArray * accessibilityCustomRotors;
@end
@protocol NSObjectUIAccessibilityCustomRotorCategoryClassExports<JSExport>
@end
@protocol UIAccessibilityCustomRotorItemResultInstanceExports<JSExport>
@property (retain,nonatomic) UITextRange * targetRange;
@property (nonatomic,weak) id targetElement;
JSExportAs(initWithTargetElementTargetRange,
-(id) jsinitWithTargetElement: (id) targetElement targetRange: (UITextRange *) targetRange );
@end
@protocol UIAccessibilityCustomRotorItemResultClassExports<JSExport>
@end
#pragma clang diagnostic pop