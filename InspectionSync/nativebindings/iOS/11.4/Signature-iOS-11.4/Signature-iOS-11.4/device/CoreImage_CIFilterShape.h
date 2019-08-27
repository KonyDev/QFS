#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIFilterShape_symbols(JSContext*);
@protocol CIFilterShapeInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly) CGRect extent;
-(CIFilterShape *) intersectWithRect: (CGRect) r ;
-(CIFilterShape *) intersectWith: (CIFilterShape *) s2 ;
-(CIFilterShape *) insetByX: (int) dx Y: (int) dy ;
JSExportAs(initWithRect,
-(id) jsinitWithRect: (CGRect) r );
-(CIFilterShape *) unionWith: (CIFilterShape *) s2 ;
-(CIFilterShape *) transformBy: (CGAffineTransform) m interior: (BOOL) flag ;
-(CIFilterShape *) unionWithRect: (CGRect) r ;
@end
@protocol CIFilterShapeClassExports<JSExport, NSCopyingClassExports_>
+(id) shapeWithRect: (CGRect) r ;
@end
#pragma clang diagnostic pop