#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIBezierPath_symbols(JSContext*);
@protocol UIBezierPathInstanceExports<JSExport, NSCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (nonatomic) id CGPath;
@property (nonatomic) CGLineCap lineCapStyle;
@property (readonly,nonatomic) CGRect bounds;
@property (nonatomic) CGFloat miterLimit;
@property (nonatomic) CGLineJoin lineJoinStyle;
@property (readonly,nonatomic) CGPoint currentPoint;
@property (nonatomic) CGFloat flatness;
@property (nonatomic) CGFloat lineWidth;
@property (nonatomic) BOOL usesEvenOddFillRule;
@property (getter=isEmpty,readonly) BOOL empty;
-(void) addArcWithCenter: (CGPoint) center radius: (CGFloat) radius startAngle: (CGFloat) startAngle endAngle: (CGFloat) endAngle clockwise: (BOOL) clockwise ;
-(void) strokeWithBlendMode: (CGBlendMode) blendMode alpha: (CGFloat) alpha ;
-(void) addLineToPoint: (CGPoint) point ;
-(BOOL) containsPoint: (CGPoint) point ;
-(void) stroke;
-(void) addQuadCurveToPoint: (CGPoint) endPoint controlPoint: (CGPoint) controlPoint ;
-(void) applyTransform: (CGAffineTransform) transform ;
-(void) fill;
-(id) CGPath;
-(id) jsinit;
-(void) appendPath: (UIBezierPath *) bezierPath ;
-(void) addClip;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(void) removeAllPoints;
-(void) closePath;
-(UIBezierPath *) bezierPathByReversingPath;
-(void) moveToPoint: (CGPoint) point ;
-(void) addCurveToPoint: (CGPoint) endPoint controlPoint1: (CGPoint) controlPoint1 controlPoint2: (CGPoint) controlPoint2 ;
-(void) fillWithBlendMode: (CGBlendMode) blendMode alpha: (CGFloat) alpha ;
@end
@protocol UIBezierPathClassExports<JSExport, NSCopyingClassExports_, NSSecureCodingClassExports_>
+(id) bezierPathWithRoundedRect: (CGRect) rect byRoundingCorners: (UIRectCorner) corners cornerRadii: (CGSize) cornerRadii ;
+(id) bezierPathWithRoundedRect: (CGRect) rect cornerRadius: (CGFloat) cornerRadius ;
+(id) bezierPathWithArcCenter: (CGPoint) center radius: (CGFloat) radius startAngle: (CGFloat) startAngle endAngle: (CGFloat) endAngle clockwise: (BOOL) clockwise ;
+(id) bezierPath;
+(id) bezierPathWithCGPath: (id) CGPath ;
+(id) bezierPathWithOvalInRect: (CGRect) rect ;
+(id) bezierPathWithRect: (CGRect) rect ;
@end
#pragma clang diagnostic pop