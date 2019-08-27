#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIGraphicsRenderer_symbols(JSContext*);
@protocol UIGraphicsRendererInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL allowsImageOutput;
@property (readonly,nonatomic) __kindof UIGraphicsRendererFormat * format;
JSExportAs(initWithBounds,
-(id) jsinitWithBounds: (CGRect) bounds );
JSExportAs(initWithBoundsFormat,
-(id) jsinitWithBounds: (CGRect) bounds format: (UIGraphicsRendererFormat *) format );
@end
@protocol UIGraphicsRendererClassExports<JSExport>
@end
@protocol UIGraphicsRendererContextInstanceExports<JSExport>
@property (readonly,nonatomic) id CGContext;
@property (readonly,nonatomic) __kindof UIGraphicsRendererFormat * format;
-(void) strokeRect: (CGRect) rect ;
-(void) fillRect: (CGRect) rect ;
-(void) fillRect: (CGRect) rect blendMode: (CGBlendMode) blendMode ;
-(void) strokeRect: (CGRect) rect blendMode: (CGBlendMode) blendMode ;
-(void) clipToRect: (CGRect) rect ;
@end
@protocol UIGraphicsRendererContextClassExports<JSExport>
@end
@protocol UIGraphicsRendererFormatInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) CGRect bounds;
@end
@protocol UIGraphicsRendererFormatClassExports<JSExport, NSCopyingClassExports_>
+(id) preferredFormat;
+(id) defaultFormat;
@end
#pragma clang diagnostic pop