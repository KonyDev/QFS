#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIImage_symbols(JSContext*);
@protocol UIImageUIImageDeprecatedCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSInteger topCapHeight;
@property (readonly,nonatomic) NSInteger leftCapWidth;
-(UIImage *) stretchableImageWithLeftCapWidth: (NSInteger) leftCapWidth topCapHeight: (NSInteger) topCapHeight ;
@end
@protocol UIImageUIImageDeprecatedCategoryClassExports<JSExport>
@end
@protocol UIImageNSItemProviderCategoryInstanceExports<JSExport, NSItemProviderReadingInstanceExports_, NSItemProviderWritingInstanceExports_, UIItemProviderPresentationSizeProvidingInstanceExports_>
@end
@protocol UIImageNSItemProviderCategoryClassExports<JSExport, NSItemProviderReadingClassExports_, NSItemProviderWritingClassExports_, UIItemProviderPresentationSizeProvidingClassExports_>
@end
@protocol CIImageUIKitAdditionsCategoryInstanceExports<JSExport>
JSExportAs(initWithImageOptions,
-(id) jsinitWithImage: (UIImage *) image options: (NSDictionary *) options );
JSExportAs(initWithImage,
-(id) jsinitWithImage: (UIImage *) image );
@end
@protocol CIImageUIKitAdditionsCategoryClassExports<JSExport>
@end
@protocol UIImageInstanceExports<JSExport, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic) id CGImage;
@property (readonly,nonatomic) CGFloat scale;
@property (readonly,nonatomic) UIEdgeInsets alignmentRectInsets;
@property (readonly,nonatomic) UIImageResizingMode resizingMode;
@property (readonly,copy,nonatomic) UITraitCollection * traitCollection;
@property (readonly,nonatomic) CIImage * CIImage;
@property (readonly,nonatomic) UIImageAsset * imageAsset;
@property (readonly,nonatomic) BOOL flipsForRightToLeftLayoutDirection;
@property (readonly,nonatomic) NSTimeInterval duration;
@property (readonly,nonatomic) UIImageOrientation imageOrientation;
@property (readonly,nonatomic) UIGraphicsImageRendererFormat * imageRendererFormat;
@property (readonly,nonatomic) UIEdgeInsets capInsets;
@property (readonly,nonatomic) NSArray * images;
@property (readonly,nonatomic) UIImageRenderingMode renderingMode;
@property (readonly,nonatomic) CGSize size;
-(id) CGImage;
JSExportAs(initWithCGImageScaleOrientation,
-(id) jsinitWithCGImage: (id) cgImage scale: (CGFloat) scale orientation: (UIImageOrientation) orientation );
-(UIImage *) imageFlippedForRightToLeftLayoutDirection;
-(void) drawAtPoint: (CGPoint) point ;
-(UIImage *) imageWithAlignmentRectInsets: (UIEdgeInsets) alignmentInsets ;
JSExportAs(initWithCIImage,
-(id) jsinitWithCIImage: (CIImage *) ciImage );
-(void) drawAtPoint: (CGPoint) point blendMode: (CGBlendMode) blendMode alpha: (CGFloat) alpha ;
-(void) drawInRect: (CGRect) rect ;
-(UIImage *) imageWithRenderingMode: (UIImageRenderingMode) renderingMode ;
-(UIImage *) resizableImageWithCapInsets: (UIEdgeInsets) capInsets resizingMode: (UIImageResizingMode) resizingMode ;
-(void) drawAsPatternInRect: (CGRect) rect ;
JSExportAs(initWithData,
-(id) jsinitWithData: (NSData *) data );
JSExportAs(initWithCIImageScaleOrientation,
-(id) jsinitWithCIImage: (CIImage *) ciImage scale: (CGFloat) scale orientation: (UIImageOrientation) orientation );
-(UIImage *) imageWithHorizontallyFlippedOrientation;
JSExportAs(initWithCGImage,
-(id) jsinitWithCGImage: (id) cgImage );
JSExportAs(initWithContentsOfFile,
-(id) jsinitWithContentsOfFile: (NSString *) path );
-(UIImage *) resizableImageWithCapInsets: (UIEdgeInsets) capInsets ;
-(void) drawInRect: (CGRect) rect blendMode: (CGBlendMode) blendMode alpha: (CGFloat) alpha ;
JSExportAs(initWithDataScale,
-(id) jsinitWithData: (NSData *) data scale: (CGFloat) scale );
@end
@protocol UIImageClassExports<JSExport, NSSecureCodingClassExports_>
+(UIImage *) imageWithCIImage: (CIImage *) ciImage scale: (CGFloat) scale orientation: (UIImageOrientation) orientation ;
+(UIImage *) imageWithData: (NSData *) data ;
+(UIImage *) animatedResizableImageNamed: (NSString *) name capInsets: (UIEdgeInsets) capInsets duration: (NSTimeInterval) duration ;
+(UIImage *) animatedResizableImageNamed: (NSString *) name capInsets: (UIEdgeInsets) capInsets resizingMode: (UIImageResizingMode) resizingMode duration: (NSTimeInterval) duration ;
+(UIImage *) imageNamed: (NSString *) name inBundle: (NSBundle *) bundle compatibleWithTraitCollection: (UITraitCollection *) traitCollection ;
+(UIImage *) animatedImageNamed: (NSString *) name duration: (NSTimeInterval) duration ;
+(UIImage *) imageWithCGImage: (id) cgImage ;
+(UIImage *) imageWithContentsOfFile: (NSString *) path ;
+(UIImage *) imageNamed: (NSString *) name ;
+(UIImage *) imageWithCIImage: (CIImage *) ciImage ;
+(UIImage *) imageWithData: (NSData *) data scale: (CGFloat) scale ;
+(UIImage *) animatedImageWithImages: (NSArray *) images duration: (NSTimeInterval) duration ;
+(UIImage *) imageWithCGImage: (id) cgImage scale: (CGFloat) scale orientation: (UIImageOrientation) orientation ;
@end
#pragma clang diagnostic pop