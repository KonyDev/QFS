#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccessibility_symbols(JSContext*);
@protocol NSObjectUIAccessibilityCategoryInstanceExports<JSExport>
@property (nonatomic) UIAccessibilityNavigationStyle accessibilityNavigationStyle;
@property (copy,nonatomic) NSAttributedString * accessibilityAttributedLabel;
@property (nonatomic,strong) NSString * accessibilityLanguage;
@property (nonatomic) UIAccessibilityTraits accessibilityTraits;
@property (nonatomic) BOOL isAccessibilityElement;
@property (nonatomic) BOOL shouldGroupAccessibilityChildren;
@property (copy,nonatomic) UIBezierPath * accessibilityPath;
@property (copy,nonatomic) NSAttributedString * accessibilityAttributedHint;
@property (nonatomic) BOOL accessibilityViewIsModal;
@property (copy,nonatomic) NSString * accessibilityHint;
@property (nonatomic) BOOL accessibilityElementsHidden;
@property (copy,nonatomic) NSString * accessibilityLabel;
@property (copy,nonatomic) NSString * accessibilityValue;
@property (copy,nonatomic) NSAttributedString * accessibilityAttributedValue;
@property (nonatomic) CGRect accessibilityFrame;
@property (nonatomic) CGPoint accessibilityActivationPoint;
@end
@protocol NSObjectUIAccessibilityCategoryClassExports<JSExport>
@end
@protocol NSObjectUIAccessibilityDraggingCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * accessibilityDropPointDescriptors;
@property (copy,nonatomic) NSArray * accessibilityDragSourceDescriptors;
@end
@protocol NSObjectUIAccessibilityDraggingCategoryClassExports<JSExport>
@end
@protocol NSObjectUIAccessibilityFocusCategoryInstanceExports<JSExport>
-(NSSet *) accessibilityAssistiveTechnologyFocusedIdentifiers;
-(void) accessibilityElementDidBecomeFocused;
-(void) accessibilityElementDidLoseFocus;
-(BOOL) accessibilityElementIsFocused;
@end
@protocol NSObjectUIAccessibilityFocusCategoryClassExports<JSExport>
@end
@protocol NSObjectUIAccessibilityActionCategoryInstanceExports<JSExport>
@property (nonatomic,strong) NSArray * accessibilityCustomActions;
-(void) accessibilityDecrement;
-(void) accessibilityIncrement;
-(BOOL) accessibilityPerformEscape;
-(BOOL) accessibilityScroll: (UIAccessibilityScrollDirection) direction ;
-(BOOL) accessibilityActivate;
-(BOOL) accessibilityPerformMagicTap;
@end
@protocol NSObjectUIAccessibilityActionCategoryClassExports<JSExport>
@end
@protocol UIAccessibilityReadingContentInstanceExports_<JSExport>
-(NSAttributedString *) accessibilityAttributedPageContent;
-(NSString *) accessibilityPageContent;
-(NSInteger) accessibilityLineNumberForPoint: (CGPoint) point ;
-(NSString *) accessibilityContentForLineNumber: (NSInteger) lineNumber ;
-(CGRect) accessibilityFrameForLineNumber: (NSInteger) lineNumber ;
-(NSAttributedString *) accessibilityAttributedContentForLineNumber: (NSInteger) lineNumber ;
@end
@protocol UIAccessibilityReadingContentClassExports_<JSExport>
@end
#pragma clang diagnostic pop