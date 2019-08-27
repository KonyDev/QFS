#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIFontMetrics_symbols(JSContext*);
@protocol UIFontMetricsInstanceExports<JSExport>
-(UIFont *) scaledFontForFont: (UIFont *) font compatibleWithTraitCollection: (UITraitCollection *) traitCollection ;
-(UIFont *) scaledFontForFont: (UIFont *) font maximumPointSize: (CGFloat) maximumPointSize ;
-(CGFloat) scaledValueForValue: (CGFloat) value compatibleWithTraitCollection: (UITraitCollection *) traitCollection ;
JSExportAs(initForTextStyle,
-(id) jsinitForTextStyle: (UIFontTextStyle) textStyle );
-(UIFont *) scaledFontForFont: (UIFont *) font ;
-(CGFloat) scaledValueForValue: (CGFloat) value ;
-(UIFont *) scaledFontForFont: (UIFont *) font maximumPointSize: (CGFloat) maximumPointSize compatibleWithTraitCollection: (UITraitCollection *) traitCollection ;
@end
@protocol UIFontMetricsClassExports<JSExport>
+(UIFontMetrics *) defaultMetrics;
+(id) metricsForTextStyle: (UIFontTextStyle) textStyle ;
@end
#pragma clang diagnostic pop