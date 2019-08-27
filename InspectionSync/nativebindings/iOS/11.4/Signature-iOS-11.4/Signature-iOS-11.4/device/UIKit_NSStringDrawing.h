#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSStringDrawing_symbols(JSContext*);
@protocol NSAttributedStringNSExtendedStringDrawingCategoryInstanceExports<JSExport>
-(CGRect) boundingRectWithSize: (CGSize) size options: (NSStringDrawingOptions) options context: (NSStringDrawingContext *) context ;
-(void) drawWithRect: (CGRect) rect options: (NSStringDrawingOptions) options context: (NSStringDrawingContext *) context ;
@end
@protocol NSAttributedStringNSExtendedStringDrawingCategoryClassExports<JSExport>
@end
@protocol NSStringDrawingContextNSStringDrawingContextDeprecatedCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) CGFloat actualTrackingAdjustment;
@property (nonatomic) CGFloat minimumTrackingAdjustment;
@end
@protocol NSStringDrawingContextNSStringDrawingContextDeprecatedCategoryClassExports<JSExport>
@end
@protocol NSStringNSExtendedStringDrawingCategoryInstanceExports<JSExport>
-(CGRect) boundingRectWithSize: (CGSize) size options: (NSStringDrawingOptions) options attributes: (NSDictionary *) attributes context: (NSStringDrawingContext *) context ;
-(void) drawWithRect: (CGRect) rect options: (NSStringDrawingOptions) options attributes: (NSDictionary *) attributes context: (NSStringDrawingContext *) context ;
@end
@protocol NSStringNSExtendedStringDrawingCategoryClassExports<JSExport>
@end
@protocol NSStringDrawingContextInstanceExports<JSExport>
@property (nonatomic) CGFloat minimumScaleFactor;
@property (readonly,nonatomic) CGRect totalBounds;
@property (readonly,nonatomic) CGFloat actualScaleFactor;
@end
@protocol NSStringDrawingContextClassExports<JSExport>
@end
@protocol NSStringNSStringDrawingCategoryInstanceExports<JSExport>
-(void) drawInRect: (CGRect) rect withAttributes: (NSDictionary *) attrs ;
-(void) drawAtPoint: (CGPoint) point withAttributes: (NSDictionary *) attrs ;
-(CGSize) sizeWithAttributes: (NSDictionary *) attrs ;
@end
@protocol NSStringNSStringDrawingCategoryClassExports<JSExport>
@end
@protocol NSAttributedStringNSStringDrawingCategoryInstanceExports<JSExport>
-(void) drawAtPoint: (CGPoint) point ;
-(void) drawInRect: (CGRect) rect ;
-(CGSize) size;
@end
@protocol NSAttributedStringNSStringDrawingCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop