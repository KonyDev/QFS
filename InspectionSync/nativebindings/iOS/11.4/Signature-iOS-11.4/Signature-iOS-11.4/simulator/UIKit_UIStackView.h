#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIStackView_symbols(JSContext*);
@protocol UIStackViewInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * arrangedSubviews;
@property (nonatomic) CGFloat spacing;
@property (getter=isBaselineRelativeArrangement,nonatomic) BOOL baselineRelativeArrangement;
@property (getter=isLayoutMarginsRelativeArrangement,nonatomic) BOOL layoutMarginsRelativeArrangement;
@property (nonatomic) UIStackViewDistribution distribution;
@property (nonatomic) UIStackViewAlignment alignment;
@property (nonatomic) UILayoutConstraintAxis axis;
-(void) removeArrangedSubview: (UIView *) view ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) coder );
-(void) addArrangedSubview: (UIView *) view ;
-(void) insertArrangedSubview: (UIView *) view atIndex: (NSUInteger) stackIndex ;
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
-(void) setCustomSpacing: (CGFloat) spacing afterView: (UIView *) arrangedSubview ;
JSExportAs(initWithArrangedSubviews,
-(id) jsinitWithArrangedSubviews: (NSArray *) views );
-(CGFloat) customSpacingAfterView: (UIView *) arrangedSubview ;
@end
@protocol UIStackViewClassExports<JSExport>
@end
#pragma clang diagnostic pop