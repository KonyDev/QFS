#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIStringDrawing_symbols(JSContext*);
@protocol NSStringUIStringDrawingCategoryInstanceExports<JSExport>
-(CGSize) drawInRect: (CGRect) rect withFont: (UIFont *) font ;
-(CGSize) drawInRect: (CGRect) rect withFont: (UIFont *) font lineBreakMode: (NSLineBreakMode) lineBreakMode alignment: (NSTextAlignment) alignment ;
-(CGSize) sizeWithFont: (UIFont *) font constrainedToSize: (CGSize) size lineBreakMode: (NSLineBreakMode) lineBreakMode ;
-(CGSize) sizeWithFont: (UIFont *) font ;
-(CGSize) drawAtPoint: (CGPoint) point forWidth: (CGFloat) width withFont: (UIFont *) font lineBreakMode: (NSLineBreakMode) lineBreakMode ;
-(CGSize) sizeWithFont: (UIFont *) font forWidth: (CGFloat) width lineBreakMode: (NSLineBreakMode) lineBreakMode ;
-(CGSize) drawAtPoint: (CGPoint) point withFont: (UIFont *) font ;
-(CGSize) drawInRect: (CGRect) rect withFont: (UIFont *) font lineBreakMode: (NSLineBreakMode) lineBreakMode ;
-(CGSize) sizeWithFont: (UIFont *) font constrainedToSize: (CGSize) size ;
-(CGSize) drawAtPoint: (CGPoint) point forWidth: (CGFloat) width withFont: (UIFont *) font fontSize: (CGFloat) fontSize lineBreakMode: (NSLineBreakMode) lineBreakMode baselineAdjustment: (UIBaselineAdjustment) baselineAdjustment ;
@end
@protocol NSStringUIStringDrawingCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop