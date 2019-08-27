#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIVector_symbols(JSContext*);
@protocol CIVectorInstanceExports<JSExport, NSCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly) size_t count;
@property (readonly) CGAffineTransform CGAffineTransformValue;
@property (readonly) CGRect CGRectValue;
@property (readonly) CGPoint CGPointValue;
@property (readonly) NSString * stringRepresentation;
@property (readonly) CGFloat W;
@property (readonly) CGFloat Y;
@property (readonly) CGFloat X;
@property (readonly) CGFloat Z;
JSExportAs(initWithX,
-(id) jsinitWithX: (CGFloat) x );
JSExportAs(initWithXYZ,
-(id) jsinitWithX: (CGFloat) x Y: (CGFloat) y Z: (CGFloat) z );
JSExportAs(initWithCGAffineTransform,
-(id) jsinitWithCGAffineTransform: (CGAffineTransform) r );
JSExportAs(initWithCGRect,
-(id) jsinitWithCGRect: (CGRect) r );
JSExportAs(initWithXYZW,
-(id) jsinitWithX: (CGFloat) x Y: (CGFloat) y Z: (CGFloat) z W: (CGFloat) w );
JSExportAs(initWithXY,
-(id) jsinitWithX: (CGFloat) x Y: (CGFloat) y );
JSExportAs(initWithString,
-(id) jsinitWithString: (NSString *) representation );
JSExportAs(initWithCGPoint,
-(id) jsinitWithCGPoint: (CGPoint) p );
-(CGFloat) valueAtIndex: (size_t) index ;
@end
@protocol CIVectorClassExports<JSExport, NSCopyingClassExports_, NSSecureCodingClassExports_>
+(id) vectorWithX: (CGFloat) x Y: (CGFloat) y ;
+(id) vectorWithCGPoint: (CGPoint) p ;
+(id) vectorWithCGRect: (CGRect) r ;
+(id) vectorWithString: (NSString *) representation ;
+(id) vectorWithX: (CGFloat) x Y: (CGFloat) y Z: (CGFloat) z W: (CGFloat) w ;
+(id) vectorWithX: (CGFloat) x Y: (CGFloat) y Z: (CGFloat) z ;
+(id) vectorWithX: (CGFloat) x ;
+(id) vectorWithCGAffineTransform: (CGAffineTransform) t ;
@end
#pragma clang diagnostic pop